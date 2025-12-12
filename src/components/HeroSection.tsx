import { GraduationCap, PartyPopper, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Subtle accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-bounce-in opacity-0 mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-secondary border border-primary/30 text-primary text-sm font-semibold tracking-wide">
            Class of 2025
          </div>
        </div>

        {/* Main heading */}
        <h1 className="animate-bounce-in opacity-0 animation-delay-200 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
          I Earned My Degree
        </h1>

        {/* Cap icon */}
        <div className="animate-bounce-in opacity-0 animation-delay-300 mb-8">
          <GraduationCap className="w-20 h-20 md:w-24 md:h-24 mx-auto text-primary animate-wiggle" />
        </div>

        {/* Subheading */}
        <p className="animate-fade-up opacity-0 animation-delay-400 font-sans text-lg md:text-xl text-muted-foreground mb-2">
          Bachelor of Science in Information Technology
        </p>

        {/* University */}
        <p className="animate-fade-up opacity-0 animation-delay-500 font-sans text-base text-muted-foreground mb-10">
          Utah Tech University • Class of 2025
        </p>

        {/* CTA */}
        <div className="animate-fade-up opacity-0 animation-delay-600">
          <a 
            href="#celebrate" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
          >
            <span>View My Journey</span>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
            <span>Scroll to learn more</span>
            <div className="w-5 h-8 border border-muted-foreground/40 rounded-full flex items-start justify-center p-1 animate-bounce">
              <div className="w-1 h-1.5 bg-muted-foreground/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
