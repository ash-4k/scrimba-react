import "./css/Buttons.css";

export default function Buttons() {
  return (
    <section className="buttons-section">
      <a href="mailto:ashlesh.kanchan@gmail.com" className="btn email-btn">
        <i className="fa-solid fa-envelope"></i>
        <span>Email</span>
      </a>

      <a
        href="https://linkedin.com/in/ashlesh-kanchan"
        className="btn linkedin-btn"
      >
        <i className="fa-brands fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
    </section>
  );
}
