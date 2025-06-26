import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultProject = {
  title: "E-commerce Product Listing Page",
  image: "/assets/cards/mid_projects/ecommerce.png",
  duration: "2-3 hours",
  difficulty: "Intermediate",
  author: "TechLearn Solutions",
  tech: ["React", "Node.js"],
  prerequisites: [
    "React basics",
    "Node.js basics"
  ],
  steps: [
    "Set up your project structure",
    "Build the product listing UI",
    "Implement filtering and sorting",
    "Add cart functionality",
    "Test and deploy"
  ],
  description: "Build a fully responsive product listing with filtering, sorting, and cart functionality."
};

const badgeColors = {
  "Mid Project": "bg-blue-100 text-blue-800",
  Beginner: "bg-yellow-100 text-yellow-800",
  Intermediate: "bg-green-100 text-green-800",
  Advanced: "bg-gray-100 text-gray-800",
};

const MidProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state || {};

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use defaultProject if project is missing or missing fields
  const data = {
    ...defaultProject,
    ...project,
    tech: project?.tech || defaultProject.tech,
    prerequisites: project?.prerequisites || defaultProject.prerequisites,
    steps: project?.steps || defaultProject.steps,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-8 w-full max-w-2xl flex flex-col items-center">
        <div className="flex flex-row items-center w-full mb-4">
          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              className="w-24 h-24 object-cover rounded-xl shadow mr-6"/>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {data.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeColors["Mid Project"]}`}>
                Mid Project
              </span>
              {data.duration && (
                <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800">
                  {data.duration}
                </span>
              )}
              {data.difficulty && (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeColors[data.difficulty] || "bg-gray-100 text-gray-800"}`}>
                  {data.difficulty}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              By {data.author}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {data.tech && data.tech.length > 0 && (
          <div className="w-full mb-2">
            <div className="font-semibold text-gray-800 mb-1">Tech Stack:</div>
            <div className="flex flex-wrap gap-2">
              {data.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Prerequisites */}
        {data.prerequisites && data.prerequisites.length > 0 && (
          <div className="w-full mb-2">
            <div className="font-semibold text-gray-800 mb-1">Prerequisites:</div>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {data.prerequisites.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        {data.steps && data.steps.length > 0 && (
          <div className="w-full mb-4">
            <div className="font-semibold text-gray-800 mb-1">Steps:</div>
            <ol className="list-decimal ml-6">
              {data.steps.map((step, i) => (
                <li
                  key={i}
                  className="bg-blue-50 px-4 py-2 my-2 rounded text-gray-800"
                  style={{ marginLeft: '-1.5rem', width: 'calc(100% + 1.5rem)' }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* CTA */}
        <div className="w-full flex justify-center mt-2">
          <a
            href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need help with project ${encodeURIComponent(data.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg shadow transition">
            Consult Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default MidProjectDetail;
