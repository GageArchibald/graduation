import { Droplet, Code, Moon, Pizza, Gamepad2, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="celebrate" className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary border border-primary/20 mb-6">
            <Code className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-primary">Journey</span>
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
            Four years of dedication, growth, and technical excellence in Information Technology
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          <SurvivalCard 
            stat="∞"
            label="Dedication"
            color="bg-secondary border-primary/20"
          />
          <SurvivalCard 
            stat="100+"
            label="Late Nights"
            color="bg-secondary border-primary/20"
          />
          <SurvivalCard 
            stat="1000s"
            label="Bugs Fixed"
            color="bg-secondary border-primary/20"
          />
          <SurvivalCard 
            stat="Many"
            label="Projects"
            color="bg-secondary border-primary/20"
          />
          <SurvivalCard 
            stat="A Few"
            label="Challenges"
            color="bg-secondary border-primary/20"
          />
          <SurvivalCard 
            stat="∞"
            label="Learning"
            color="bg-secondary border-primary/20"
          />
        </div>

        {/* Personal message */}
        <div className="bg-secondary rounded-lg p-8 md:p-12 text-center border border-primary/10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            I'm grateful for everyone who supported me through this educational journey. Your encouragement and guidance made a difference.
          </p>
          <p className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Thank You
          </p>
        </div>
      </div>
    </section>
  );
};

interface SurvivalCardProps {
  stat: string;
  label: string;
  color: string;
}

const SurvivalCard = ({ stat, label, color }: Omit<SurvivalCardProps, 'emoji'>) => {
  return (
    <div className={`${color} rounded-lg p-6 text-center border hover:border-primary/40 hover:bg-secondary/80 transition-all duration-300`}>
      <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        {stat}
      </div>
      <p className="font-sans text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
    </div>
  );
};

export default AboutSection;
