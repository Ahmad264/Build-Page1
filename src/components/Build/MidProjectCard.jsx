import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const MidProjectCard = ({ project, setShowPopup }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.free) {
      navigate(`/build/midproject/${project.id}`, { state: { project } });
    } else if (!user?.isClubMember && project.locked) {
      setShowPopup(true);
    } else {
      navigate(`/build/midproject/${project.id}`, { state: { project } });
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      {/* Image card with gradient badge */}
      <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient Club / Free badge */}
        {project.free ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gradient-to-r from-green-400 via-blue-400 to-blue-500 text-white shadow-lg z-10 leading-none">
            Free
          </span>
        ) : project.locked ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-lg z-10 leading-none">
            Club
          </span>
        ) : null}

        {/* Tags (optional) */}
        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[0.6rem] font-semibold px-2 py-[2px] bg-white/80 dark:bg-slate-900/80 rounded-full text-gray-800 dark:text-white shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Text content OUTSIDE the white image box */}
      <div className="px-1">
        {/* Title */}
        <h3 className="text-[0.9rem] font-bold text-gray-900 dark:text-white mb-1 leading-tight">
          {project.title}
        </h3>

        {/* Description (NEW) */}
        {project.description && (
          <p className="text-[0.8rem] text-gray-600 dark:text-gray-300 mb-1 leading-snug line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Price / Free Label */}
        <span className="text-[0.75rem] font-semibold text-gray-700 dark:text-white">
          {project.free ? "Free" : project.price || "₹XXX"}
        </span>
      </div>
    </div>
  );
};

export default MidProjectCard;
