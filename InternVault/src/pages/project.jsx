import { useState } from "react";
const projectData = [
  // Full Stack Projects
  {
    id: 1,
    title: "Portfolio Website",
    domain: "Full Stack",
    level: "Beginner",
    description: "A personal portfolio using HTML, CSS, JS or React."
  },
  {
    id: 2,
    title: "E-commerce Website",
    domain: "Full Stack",
    level: "Intermediate",
    description: "Full MERN stack website with authentication and cart."
  },
  {
    id: 3,
    title: "Social Media App",
    domain: "Full Stack",
    level: "Advanced",
    description: "Real-time chat, posts, likes, and notifications."
  },

  // AI/ML Projects
  {
    id: 4,
    title: "Spam Email Classifier",
    domain: "AI/ML",
    level: "Beginner",
    description: "Train a model to classify spam and ham emails."
  },
  {
    id: 5,
    title: "Credit Card Fraud Detection",
    domain: "AI/ML",
    level: "Intermediate",
    description: "Fraud detection with imbalance handling + ML pipeline."
  },
  {
    id: 6,
    title: "Real-time Object Detection",
    domain: "AI/ML",
    level: "Advanced",
    description: "YOLO/SSD model detecting objects in real time."
  },

  // DevOps Projects
  {
    id: 7,
    title: "CI/CD Pipeline Setup",
    domain: "DevOps",
    level: "Intermediate",
    description: "GitHub Actions + Docker + Kubernetes deployment."
  }
];


export function Project() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const domains = ["All", "Full Stack", "AI/ML", "DevOps"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  // FILTERING LOGIC
  const filteredProjects = projectData.filter((project) => {
    const domainMatch =
      selectedDomain === "All" || project.domain === selectedDomain;

    const levelMatch =
      selectedLevel === "All" || project.level === selectedLevel;

    return domainMatch && levelMatch;
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Project Ideas Library</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        {/* Domain Filter */}
        <select
          className="p-2 border rounded-lg"
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
        >
          {domains.map((domain) => (
            <option key={domain}>{domain}</option>
          ))}
        </select>

        {/* Level Filter */}
        <select
          className="p-2 border rounded-lg"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          {levels.map((lvl) => (
            <option key={lvl}>{lvl}</option>
          ))}
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-4 border rounded-xl shadow bg-white hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-1">{project.description}</p>

            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-blue-200 text-sm">
                {project.domain}
              </span>
              <span className="px-3 py-1 rounded-full bg-green-200 text-sm">
                {project.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-5">No projects found.</p>
      )}
    </div>
  );
}
