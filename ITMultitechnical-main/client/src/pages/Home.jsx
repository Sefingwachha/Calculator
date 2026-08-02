import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // Preview data for the home page
  const featuredServices = [
    { id: 1, icon: "💻", title: "Enterprise Web Dev", desc: "Custom, high-performance web applications built to scale." },
    { id: 2, icon: "☁️", title: "Cloud Infrastructure", desc: "Secure and scalable cloud deployment and management." },
    { id: 3, icon: "🛡️", title: "Cyber Security", desc: "Robust security protocols and vulnerability assessments." },
  ];

  const featuredProjects = [
    { id: 1, title: "FinTech Dashboard", client: "Global Finance Corp", tags: ["React", "Node.js"], grad: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)" },
    { id: 2, title: "E-Commerce Ecosystem", client: "RetailMax", tags: ["Next.js", "Stripe"], grad: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)" },
  ];

  return (
    <div className="home-container">
      
      {/* 1. Epic Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-bg-grid"></div>
        <div className="hero-content">
          <span className="hero-badge">Welcome to the Future of Tech</span>
          <h1 className="hero-title">
            Transforming Ideas into <br/>
            <span className="gradient-text">Digital Reality</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge software solutions and elite IT training to empower your business in the modern digital landscape.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary-large">Start a Project</Link>
            <Link to="/services" className="btn-outline-large">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* 2. Services Preview Section */}
      <section className="premium-section alt-bg">
        <div className="section-content">
          <div className="section-header-split">
            <h2 className="display-title">Our <span className="gradient-text">Expertise</span></h2>
            <Link to="/services" className="text-link">View All Services &rarr;</Link>
          </div>
          
          <div className="home-cards-grid">
            {featuredServices.map(service => (
              <div className="home-card" key={service.id}>
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Preview Section */}
      <section className="premium-section">
        <div className="section-bg-grid"></div>
        <div className="section-content">
          <div className="section-header-split">
            <h2 className="display-title">Featured <span className="gradient-text">Work</span></h2>
            <Link to="/projects" className="text-link">View Portfolio &rarr;</Link>
          </div>
          
          <div className="home-projects-grid">
            {featuredProjects.map(project => (
              <div className="home-project-card" key={project.id}>
                <div className="hp-visual" style={{ background: project.grad }}></div>
                <div className="hp-content">
                  <span className="hp-client">{project.client}</span>
                  <h3>{project.title}</h3>
                  <div className="hp-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="hp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;