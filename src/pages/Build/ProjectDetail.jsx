import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMiniProjects from "../../hooks/useMiniProjects";

const extraDetails = {
  "Simple Calculator App": {
    tech: ["HTML", "CSS", "JavaScript"],
    prerequisites: ["Basic HTML/CSS", "JavaScript fundamentals"],
    steps: [
      "Create HTML layout for calculator buttons and screen",
      "Style the calculator using CSS",
      "Write JavaScript functions for operations",
      "Add event listeners to buttons",
      "Test for edge cases and mobile responsiveness"
    ]
  },
  "Basic To-Do List App": {
    tech: ["JavaScript", "HTML", "CSS"],
    prerequisites: ["DOM manipulation", "Basic JavaScript functions"],
    steps: [
      "Create UI with input and task list",
      "Store tasks in JavaScript array",
      "Enable add/delete/mark complete",
      "Optional: Save in localStorage",
      "Polish UI with styling"
    ]
  },
  "Beginner's Blog Website": {
    tech: ["HTML", "CSS"],
    prerequisites: ["HTML structure", "CSS Flex/Grid"],
    steps: [
      "Design blog header and layout",
      "Add content cards and sidebar",
      "Style with media queries",
      "Optimize for responsiveness",
      "Optional: Deploy using GitHub Pages"
    ]
  },
  "Simple Weather App": {
    tech: ["JavaScript", "OpenWeatherMap API"],
    prerequisites: ["API calls with fetch", "Basic JS"],
    steps: [
      "Create input field for city",
      "Use fetch to call weather API",
      "Display temperature, humidity, and condition",
      "Handle loading/errors",
      "Style app for clarity"
    ]
  },
  "Basic Quiz App": {
    tech: ["JavaScript", "HTML/CSS"],
    prerequisites: ["JavaScript arrays & conditions"],
    steps: [
      "Create question set in JS",
      "Display one question at a time",
      "Track score and correct answers",
      "Show results at end",
      "Style with progress indicators"
    ]
  },
  "Beginner's Website": {
    tech: ["HTML", "CSS"],
    prerequisites: ["Basic Web Layout", "CSS Properties"],
    steps: [
      "Structure homepage sections",
      "Add images, text, and navigation",
      "Style header/footer sections",
      "Make layout responsive",
      "Optional: Host on Netlify"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const { miniProjects } = useMiniProjects();

  const project = miniProjects.find((p) => String(p._id) === String(id));

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-800 dark:text-white">
            {id ? "Project not found" : "Loading project..."}
          </p>
        </div>
      </div>
    );
  }

  const details = extraDetails[project.title];

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-32 h-32 object-cover rounded-xl shadow"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded">
                Mini Project
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded">
                Beginner
              </span>
            </div>
            <div className="text-gray-600 dark:text-gray-200 mb-1">
              {project.description}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              By TechLearn Solutions
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {details?.tech && (
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {details.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Prerequisites */}
        {details?.prerequisites && (
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Prerequisites:</h3>
            <ul className="list-disc ml-6">
              {details.prerequisites.map((item, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-200">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        {details?.steps && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Steps:</h3>
            <ol className="list-decimal ml-6 space-y-2">
              {details.steps.map((step, i) => (
                <li
                  key={i}
                  className="bg-blue-50 dark:bg-slate-700 text-gray-800 dark:text-gray-100 p-3 rounded"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="flex justify-center">
          <a
            href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need help with project ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold text-lg shadow"
          >
            Consult Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
