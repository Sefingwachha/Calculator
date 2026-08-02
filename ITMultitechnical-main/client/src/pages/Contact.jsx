import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="premium-contact-wrapper">
      <div className="premium-contact-card">
        
        {/* Left Side: Cinematic Sidebar */}
        <div className="contact-sidebar">
          <div className="sidebar-glow"></div>
          <h2>Get in Touch</h2>
          <p className="subtitle">Send us an enquiry and we'll get back to you immediately.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <strong>Company</strong>
              <span>IT Multi Technical & Training Institute Pvt. Ltd.</span>
            </div>
            <div className="detail-item">
              <strong>Email</strong>
              <span>info@yourcompany.com</span>
            </div>
            <div className="detail-item">
              <strong>Phone</strong>
              <span>+977-XXXXXXXXXX</span>
            </div>
            <div className="detail-item">
              <strong>Address</strong>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        {/* Right Side: Conditional Form or Success State */}
        <div className="contact-form-area">
          {submitted ? (
            <div className="success-message-container">
              <div className="success-icon-badge">✨</div>
              <h3>Enquiry Sent Successfully!</h3>
              <p>Thank you for reaching out. Our team will review your message and get back to you shortly.</p>
              <button 
                type="button" 
                className="btn-cinematic" 
                onClick={() => setSubmitted(false)}
              >
                <span>Send Another Message</span>
              </button>
            </div>
          ) : (
            <form className="premium-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label>Name <span className="req">*</span></label>
                  <input type="text" placeholder="John Doe" className="modern-input" required />
                </div>
                <div className="input-group">
                  <label>Email <span className="req">*</span></label>
                  <input type="email" placeholder="john@example.com" className="modern-input" required />
                </div>
              </div>
              
              <div className="input-group">
                <label>Phone (Optional)</label>
                <input type="tel" placeholder="+977-XXXXXXXXXX" className="modern-input" />
              </div>

              <div className="input-group">
                <label>Message <span className="req">*</span></label>
                <textarea placeholder="How can we help you?" className="modern-input textarea" required></textarea>
              </div>

              <button type="submit" className="btn-cinematic">
                <span>Submit Enquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;