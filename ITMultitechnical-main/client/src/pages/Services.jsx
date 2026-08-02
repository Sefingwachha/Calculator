import "./Services.css";

function Services() {
  // Premium hardcoded data so your client demo never fails
  const servicesData = [
    {
      id: 1,
      icon: "💻",
      title: "Enterprise Web Development",
      description: "Custom, responsive, and high-performance web applications built to scale with your business needs.",
    },
    {
      id: 2,
      icon: "🎓",
      title: "Advanced IT Training",
      description: "Comprehensive bootcamps and corporate training in modern programming languages and frameworks.",
    },
    {
      id: 3,
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud deployment, architecture, and management using AWS and Azure.",
    },
    {
      id: 4,
      icon: "🛡️",
      title: "Cyber Security Solutions",
      description: "Vulnerability assessments, penetration testing, and robust security protocols for your data.",
    },
    {
      id: 5,
      icon: "📱",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that deliver native experiences on iOS and Android.",
    },
    {
      id: 6,
      icon: "⚙️",
      title: "Technical Support",
      description: "24/7 dedicated IT maintenance, troubleshooting, and enterprise network management.",
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="display-title">Our <span className="gradient-text">Services</span></h1>
        <p className="subtitle">Delivering cutting-edge technical solutions and elite training programs to elevate your business.</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;