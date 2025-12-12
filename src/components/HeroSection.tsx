import { GraduationCap, PartyPopper, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coral via-primary to-coral-light">
      {/* Fun background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold/30 blur-2xl animate-float" />
        <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-lavender/30 blur-3xl animate-float animation-delay-300" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-mint/30 blur-2xl animate-float animation-delay-600" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-teal/30 blur-xl animate-float animation-delay-400" />
      </div>

      {/* Decorative accent circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary-foreground/40 animate-pulse" />
        <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-accent/40 animate-pulse animation-delay-600" />
        <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-primary-foreground/30 animate-pulse animation-delay-700" />
        <div className="absolute bottom-[30%] right-[10%] w-3 h-3 rounded-full bg-accent/40 animate-pulse animation-delay-800" />
        <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-primary-foreground/40 animate-pulse animation-delay-400" />
        <div className="absolute top-[50%] right-[5%] w-3 h-3 rounded-full bg-accent/40 animate-pulse animation-delay-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Fun badge */}
        <div className="animate-bounce-in opacity-0 mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30">
            <PartyPopper className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground font-semibold tracking-wide">Class of 2025</span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
        </div>

        {/* Main heading - bigger and bolder */}
        <h1 className="animate-bounce-in opacity-0 animation-delay-200 font-display text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary-foreground leading-none mb-4">
          I DID IT!
        </h1>

        {/* Cap icon */}
        <div className="animate-bounce-in opacity-0 animation-delay-300 my-8">
          <GraduationCap className="w-20 h-20 md:w-28 md:h-28 mx-auto text-primary-foreground animate-wiggle" />
        </div>

        {/* Subheading */}
        <p className="animate-fade-up opacity-0 animation-delay-400 font-sans text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
          Bachelor of Science in Information Technology
        </p>

        {/* University */}
        <p className="animate-fade-up opacity-0 animation-delay-500 font-sans text-lg text-primary-foreground/80 mb-8">
          Utah Tech University
        </p>

        {/* Fun CTA */}
        <div className="animate-fade-up opacity-0 animation-delay-600">
          <a 
            href="#celebrate" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Let's Celebrate!</span>
            <PartyPopper className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
            <span className="text-sm font-medium">Scroll for more</span>
            <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2 animate-bounce">
              <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
