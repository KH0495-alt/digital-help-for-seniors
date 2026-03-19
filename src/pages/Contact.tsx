import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Bedankt! Wij nemen zo snel mogelijk contact met u op.");
    setNaam("");
    setEmail("");
    setBericht("");
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-accessible-3xl mb-4">
            <span className="text-primary">Contact</span> opnemen
          </h1>
          <p className="text-accessible-base text-muted-foreground max-w-lg mx-auto">
            Heeft u hulp nodig? Neem gerust contact met ons op. Wij helpen u graag!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl grid md:grid-cols-2 gap-12">
        {/* Telefoon */}
        <div className="flex flex-col items-center justify-center bg-card rounded-2xl p-10 border border-border shadow-md">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
            <Phone size={40} />
          </div>
          <p className="text-muted-foreground text-accessible-base mb-2">Bel ons op:</p>
          <a
            href="tel:+31612345678"
            className="text-accessible-2xl font-extrabold text-primary hover:underline"
          >
            06 – 1234 5678
          </a>
          <p className="text-muted-foreground text-accessible-sm mt-4 text-center">
            Bereikbaar op werkdagen van 9:00 tot 17:00
          </p>
        </div>

        {/* Formulier */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-md space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <Mail size={24} className="text-accent" />
            <h2 className="text-accessible-lg font-bold">Stuur een bericht</h2>
          </div>

          <div>
            <label htmlFor="naam" className="block text-accessible-sm font-semibold mb-2">
              Uw naam
            </label>
            <input
              id="naam"
              type="text"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-lg border border-input bg-background text-accessible-base focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Vul uw naam in"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-accessible-sm font-semibold mb-2">
              E-mailadres
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-lg border border-input bg-background text-accessible-base focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Vul uw e-mailadres in"
            />
          </div>

          <div>
            <label htmlFor="bericht" className="block text-accessible-sm font-semibold mb-2">
              Uw vraag
            </label>
            <textarea
              id="bericht"
              value={bericht}
              onChange={(e) => setBericht(e.target.value)}
              required
              rows={4}
              className="w-full px-5 py-4 rounded-lg border border-input bg-background text-accessible-base focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Waar kunnen wij u mee helpen?"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-lg bg-primary text-primary-foreground text-accessible-base font-bold shadow-lg hover:opacity-90 transition"
          >
            <Send size={22} />
            Verstuur bericht
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
