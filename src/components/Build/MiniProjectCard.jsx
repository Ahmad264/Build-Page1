import React from "react";
import { useNavigate } from "react-router-dom";

const tagColors = {
  Python: "bg-blue-100 text-blue-700",
  "HTML/CSS": "bg-pink-100 text-pink-700",
  JS: "bg-yellow-100 text-yellow-700",
  Beginner: "bg-green-100 text-green-700",
};

const MiniProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex-none w-40 cursor-pointer"
      onClick={() => navigate(`/build/mini/${project._id}`)} // ✅ Fixed: use MongoDB _id
    >
      {/* Image Card */}
      <div className="w-full h-32 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition overflow-hidden mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content Below Card */}
      <div className="px-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm font-medium text-gray-800 dark:text-gray-100 leading-tight">
          {project.title}
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
