import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span className="text-accessible-lg font-extrabold text-primary">
          Bit<span className="text-accent">Hulp</span>
        </span>
        <p className="text-muted-foreground text-accessible-sm mt-1">
          Digitale hulp voor ouderen
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Link to="/contact" className="text-accessible-sm text-primary font-semibold hover:underline">
          Contact
        </Link>
        <a href="tel:+31612345678" className="flex items-center gap-2 text-accessible-sm text-primary font-semibold">
          <Phone size={20} /> 06 – 1234 5678
        </a>
      </div>
    </div>
    <div className="text-center py-4 text-muted-foreground text-sm border-t border-border">
      © {new Date().getFullYear()} BitHulp. Alle rechten voorbehouden.
    </div>
  </footer>
);

export default Footer;
