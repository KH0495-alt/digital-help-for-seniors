import { Link } from "react-router-dom";
import { MessageCircle, Smartphone, FileText, Video, Bot, Users } from "lucide-react";
import heroImage from "@/assets/hero-elderly.png";

const apps = [
  { name: "WhatsApp", icon: MessageCircle, description: "Berichten sturen en ontvangen" },
  { name: "DigiD", icon: Smartphone, description: "Inloggen bij de overheid" },
  { name: "Facebook", icon: Users, description: "In contact blijven met familie" },
];

const diensten = [
  { icon: MessageCircle, title: "App-uitleg", text: "Stap-voor-stap uitleg over populaire apps" },
  { icon: Smartphone, title: "Installatie­hulp", text: "Apps installeren en instellen" },
  { icon: FileText, title: "Handleidingen", text: "Duidelijke PDF-handleidingen" },
  { icon: Video, title: "Uitleg­video's", text: "Korte video's per app" },
  { icon: Bot, title: "Chatbot", text: "Directe hulp als u er niet uitkomt" },
  { icon: Users, title: "Persoonlijke hulp", text: "Wij komen helpen als het nodig is" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 animate-fade-in-up">
            <h1 className="text-accessible-3xl md:text-accessible-3xl leading-tight mb-6">
              Moeite met apps?<br />
              <span className="text-primary">Wij helpen u!</span>
            </h1>
            <p className="text-accessible-base text-muted-foreground mb-8 max-w-lg">
              BitHulp geeft rustige, duidelijke uitleg over apps. Stap voor stap. Met herhaling waar nodig. Zodat u het zelf kunt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-lg bg-primary text-primary-foreground text-accessible-base font-bold shadow-lg hover:opacity-90 transition"
              >
                Hulp aanvragen
              </Link>
              <Link
                to="/veilig-internet"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-lg bg-card text-foreground text-accessible-base font-bold border-2 border-border hover:bg-muted transition"
              >
                Veilig internetten
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={heroImage}
              alt="Oudere persoon die blij een tablet gebruikt"
              className="w-full max-w-md animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </section>

      {/* Populaire Apps */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-accessible-2xl text-center mb-10">Populaire apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {apps.map((app) => (
            <Link
              to="/contact"
              key={app.name}
              className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card shadow-md border border-border hover:shadow-lg hover:border-primary transition group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <app.icon size={32} />
              </div>
              <span className="text-accessible-lg font-bold">{app.name}</span>
              <span className="text-muted-foreground text-accessible-sm text-center">{app.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-warm">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-accessible-2xl text-center mb-4">Wat wij doen</h2>
          <p className="text-accessible-base text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            BitHulp biedt verschillende vormen van ondersteuning. Altijd rustig, altijd op uw tempo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {diensten.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-xl bg-card shadow-sm border border-border flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <d.icon size={24} />
                </div>
                <div>
                  <h3 className="text-accessible-base font-bold mb-1">{d.title}</h3>
                  <p className="text-muted-foreground text-accessible-sm">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-accessible-2xl mb-4">Heeft u hulp nodig?</h2>
        <p className="text-accessible-base text-muted-foreground mb-8 max-w-lg mx-auto">
          Neem gerust contact op. Wij helpen u graag, rustig en zonder haast.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg bg-primary text-primary-foreground text-accessible-lg font-bold shadow-lg hover:opacity-90 transition"
        >
          Neem contact op
        </Link>
      </section>
    </div>
  );
};

export default Index;
