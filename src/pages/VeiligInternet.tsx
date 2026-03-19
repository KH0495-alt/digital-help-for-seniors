import { Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import shieldImage from "@/assets/shield-safe.png";

const wachtwoordTips = [
  "Gebruik minstens 12 tekens",
  "Gebruik hoofdletters, kleine letters en cijfers",
  "Gebruik geen namen of geboortedata",
  "Gebruik een ander wachtwoord voor elke website",
  "Schrijf uw wachtwoorden op een veilige plek op",
];

const nepberichtenTips = [
  "Banken vragen nooit om uw wachtwoord via e-mail of SMS",
  "Klik niet zomaar op linkjes in berichten",
  "Controleer het e-mailadres van de afzender",
  "Twijfelt u? Bel het bedrijf zelf op via het officiële nummer",
  "Geef nooit uw pincode of wachtwoord aan iemand",
];

const VeiligInternet = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-accessible-3xl mb-4">
              <span className="text-primary">Veilig</span> internet
            </h1>
            <p className="text-accessible-base text-muted-foreground max-w-lg">
              Op internet is het belangrijk om voorzichtig te zijn. Hier leest u hoe u veilig blijft.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={shieldImage} alt="Veiligheidssymbool" className="w-40 md:w-52" />
          </div>
        </div>
      </section>

      {/* Wachtwoorden */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Lock size={28} />
          </div>
          <h2 className="text-accessible-2xl">Sterke wachtwoorden</h2>
        </div>
        <p className="text-accessible-base text-muted-foreground mb-6">
          Een goed wachtwoord beschermt uw gegevens. Hier zijn tips voor een sterk wachtwoord:
        </p>
        <ul className="space-y-4">
          {wachtwoordTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border">
              <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-accessible-base">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Nepberichten */}
      <section className="bg-warm">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
              <AlertTriangle size={28} />
            </div>
            <h2 className="text-accessible-2xl">Pas op voor nepberichten</h2>
          </div>
          <p className="text-accessible-base text-muted-foreground mb-6">
            Oplichters sturen soms neppe e-mails of SMS'jes. Zo herkent u ze:
          </p>
          <ul className="space-y-4">
            {nepberichtenTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border">
                <Shield size={24} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-accessible-base">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VeiligInternet;
