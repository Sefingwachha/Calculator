import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "FinTech Dashboard",
      client: "Global Finance Corp",
      description: "A real-time analytics dashboard processing millions of transactions with advanced data visualization.",
      tags: ["React", "TypeScript", "Node.js"],
      gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
      id: 2,
      title: "E-Commerce Ecosystem",
      client: "RetailMax",
      description: "A headless e-commerce platform featuring AI-driven product recommendations and lightning-fast checkout.",
      tags: ["Next.js", "Stripe", "Tailwind"],
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"
    },
    {
      id: 3,
      title: "Smart Learning Portal",
      client: "EduTech Institute",
      description: "An interactive learning management system with video streaming and automated grading systems.",
      tags: ["Vue.js", "Python", "AWS"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 4,
      title: "HealthTrack Mobile",
      client: "MedLife Care",
      description: "A secure cross-platform mobile application for patient monitoring and telehealth consultations.",
      tags: ["React Native", "Firebase"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="display-title">Featured <span className="gradient-text">Projects</span></h1>
        <p className="subtitle">Explore our portfolio of successful digital transformations and enterprise software solutions.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            {/* Abstract visual placeholder instead of a standard image */}
            <div className="project-visual" style={{ background: project.gradient }}>
              <div className="visual-overlay">
                <span className="view-btn">View Case Study</span>
              </div>
            </div>
            
            <div className="project-content">
              <span className="project-client">{project.client}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;