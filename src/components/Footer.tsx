import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Endorfit Gym" className="h-10 w-10 rounded-full" />
              <span className="text-lg font-bold">
                <span className="text-primary">ENDORFIT</span>
                <span className="text-foreground ml-2">GYM</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Personalni fitnes centar na Zvezdari</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigacija</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Početna
              </Link>
              <Link to="/o-nama" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                O nama
              </Link>
              <Link to="/usluge" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Usluge
              </Link>
              <Link to="/treneri" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Treneri
              </Link>
              <Link to="/galerija" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Galerija
              </Link>
              <Link to="/lokacija" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lokacija
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Olge Jovanović 2</p>
              <p>Beograd, Zvezdara</p>
              <p className="text-primary">@endorfit_gym</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Endorfit Gym. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};
