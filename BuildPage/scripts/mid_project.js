const mongoose = require("mongoose");
const MidProject = require("../models/midProject");

mongoose
  .connect("mongodb://localhost:27017/techlearn")
  .then(async () => {
    console.log("✅ MongoDB connected");

    // Clear existing mid-level projects
    await MidProject.deleteMany({});

    // Insert new mid-level projects
    await MidProject.insertMany([
      {
        title: "E-commerce Product Listing Page",
        description: "Build a product page with filters, sorting, and cart functionality.",
        image: "/assets/cards/mid_projects/ecommerce.png",
        languages: ["React", "Node.js"],
        guideSteps: [
          "Setup React project with routing",
          "Design responsive grid layout",
          "Implement filtering and sorting",
          "Add 'Add to Cart' functionality",
          "Deploy on Vercel or Netlify"
        ],
        clubOnly: false
      },
      {
        title: "Data Visualization Dashboard",
        description: "Create interactive dashboards using Python and data visualization libraries.",
        image: "/assets/cards/mid_projects/dataviz.png",
        languages: ["Python", "Data Science"],
        guideSteps: [
          "Load dataset using Pandas",
          "Create charts using Plotly or Matplotlib",
          "Build dashboard with Streamlit",
          "Add filter widgets",
          "Host on Streamlit Cloud"
        ],
        clubOnly: false
      },
      {
        title: "Social Media Feed with API",
        description: "Create a real-time social feed with like and comment functionality.",
        image: "/assets/cards/mid_projects/social.png",
        languages: ["React", "Node.js"],
        guideSteps: [
          "Design feed UI",
          "Setup REST API using Express",
          "Fetch and display posts in real-time",
          "Implement like and comment features",
          "Secure endpoints using JWT"
        ],
        clubOnly: true
      },
      {
        title: "Task Management App",
        description: "Build a collaborative Kanban-style task manager with drag and drop.",
        image: "/assets/cards/mid_projects/taskmanager.png",
        languages: ["Vue", "Django"],
        guideSteps: [
          "Setup Django REST API",
          "Create frontend using Vue.js",
          "Implement drag-and-drop for tasks",
          "Build user authentication system",
          "Deploy on Render"
        ],
        clubOnly: true
      },
      {
        title: "Real-time Chat Application",
        description: "Develop a modern chat app with private/group messaging and file sharing.",
        image: "/assets/cards/mid_projects/chat.png",
        languages: ["JavaScript", "Node.js"],
        guideSteps: [
          "Use Socket.io for real-time communication",
          "Design UI with Tailwind CSS",
          "Implement private and group chats",
          "Add file sharing feature",
          "Deploy using Railway or Heroku"
        ],
        clubOnly: true
      },
      {
        title: "Machine Learning Predictor",
        description: "Train and deploy an ML model for real-world predictions in a web app.",
        image: "/assets/cards/mid_projects/mlpredictor.png",
        languages: ["Python", "ML"],
        guideSteps: [
          "Train a model using Scikit-Learn",
          "Build prediction API using Flask",
          "Create React frontend to collect input",
          "Send data to API and display results",
          "Host both frontend and backend"
        ],
        clubOnly: true
      },
      {
        title: "Expense Tracker with Analytics",
        description: "Create a personal finance dashboard with budget tracking and analytics.",
        image: "/assets/cards/mid_projects/expense.png",
        languages: ["Angular", "Flask"],
        guideSteps: [
          "Setup Flask backend for transactions",
          "Use Angular to build the dashboard",
          "Add charts using Chart.js",
          "Implement monthly budget feature",
          "Add login system"
        ],
        clubOnly: true
      },
      {
        title: "Recipe Finder App",
        description: "Build a recipe discovery platform with search, filters, and meal plans.",
        image: "/assets/cards/mid_projects/recipe.png",
        languages: ["React", "Node.js"],
        guideSteps: [
          "Fetch recipes from external API",
          "Implement search and filter",
          "Add meal planning calendar",
          "Build shopping list feature",
          "Deploy full-stack app"
        ],
        clubOnly: true
      },
      {
        title: "Weather Forecast Dashboard",
        description: "Display detailed weather data using interactive components and maps.",
        image: "/assets/cards/mid_projects/weather.png",
        languages: ["JavaScript", "Python"],
        guideSteps: [
          "Fetch weather data from OpenWeatherMap",
          "Build dashboard layout",
          "Display current, hourly, and weekly data",
          "Add map view for geolocation",
          "Host using static hosting"
        ],
        clubOnly: true
      }
    ]);

    console.log("✅ Mid-Level Projects seeded successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });
