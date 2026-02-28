import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href=""
        className="footer-icon"
        aria-label="Twitter"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://facebook.com/ashlesh.kanchan"
        className="footer-icon"
        aria-label="Facebook"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a
        href="https://instagram.com/ash.the.k"
        className="footer-icon"
        aria-label="Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://github.com/ash-the-k"
        className="footer-icon"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}
