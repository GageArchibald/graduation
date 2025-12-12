import { Droplet, Code, Moon, Pizza, Gamepad2, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="celebrate" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Journey Was <span className="text-primary">Rewarding</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
            Four years of coding, caffeine, and occasional chaos. Here's how I survived...
          </p>
        </div>

        {/* Fun survival stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          <SurvivalCard 
            emoji=""
            stat="∞"
            label="Dr Peppers"
            color="bg-red-100 border-red-200"
          />
          <SurvivalCard 
            emoji=""
            stat="100+"
            label="All-Nighters"
            color="bg-indigo-100 border-indigo-200"
          />
          <SurvivalCard 
            emoji=""
            stat="1000s"
            label="Bugs Squashed"
            color="bg-emerald-100 border-emerald-200"
          />
          <SurvivalCard 
            emoji=""
            stat="Many"
            label="Pizza Nights"
            color="bg-red-100 border-red-200"
          />
          <SurvivalCard 
            emoji=""
            stat="A Few"
            label="Panic Moments"
            color="bg-yellow-100 border-yellow-200"
          />
          <SurvivalCard 
            emoji=""
            stat="Some"
            label="Study Breaks"
            color="bg-purple-100 border-purple-200"
          />
        </div>

        {/* Personal message */}
        <div className="bg-gradient-to-r from-secondary via-card to-secondary rounded-3xl p-8 md:p-12 text-center border border-border">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <p className="font-sans text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            "To everyone who supported me through challenging coursework, 
            difficult exams, and moments of doubt..."
          </p>
          <p className="font-display text-3xl md:text-4xl font-bold text-primary">
            Thank You!
          </p>
        </div>
      </div>
    </section>
  );
};

interface SurvivalCardProps {
  emoji: string;
  stat: string;
  label: string;
  color: string;
}

const SurvivalCard = ({ emoji, stat, label, color }: SurvivalCardProps) => {
  return (
    <div className={`${color} rounded-xl p-6 text-center border hover:border-primary/50 hover:shadow-md transition-all duration-300`}>
      <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        {stat}
      </div>
      <p className="font-sans text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
    </div>
  );
};

export default AboutSection;
