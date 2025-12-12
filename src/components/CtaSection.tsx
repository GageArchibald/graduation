import { Heart, PartyPopper, Rocket, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        {/* Big thank you */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <Heart className="w-10 h-10 text-primary fill-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Couldn't Have Done It <span className="text-primary">Without You</span>
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            To my family, friends, professors, and everyone who believed in me 
            (even when I didn't believe in myself)...
          </p>
        </div>

        {/* Heart animation */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
          <Heart className="w-10 h-10 text-primary fill-primary animate-pulse animation-delay-100" />
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse animation-delay-200" />
          <Heart className="w-10 h-10 text-primary fill-primary animate-pulse animation-delay-300" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse animation-delay-400" />
        </div>

        {/* Fun fact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-mint/30 rounded-xl p-8 border border-mint/50 hover:border-mint hover:shadow-md transition-all duration-300">
            <Rocket className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">What's Next?</h3>
            <p className="font-sans text-muted-foreground">Excited to start my career in information technology and make an impact in the field</p>
          </div>
          <div className="bg-lavender/30 rounded-xl p-8 border border-lavender/50 hover:border-lavender hover:shadow-md transition-all duration-300">
            <Sparkles className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Celebration Time</h3>
            <p className="font-sans text-muted-foreground">Looking forward to celebrating this milestone with friends and family</p>
          </div>
        </div>

        {/* Final message */}
        <div className="bg-gradient-to-r from-primary via-coral to-coral-light rounded-3xl p-8 md:p-12 text-primary-foreground">
          <PartyPopper className="w-10 h-10 mx-auto mb-4" />
          <p className="font-display text-2xl md:text-3xl font-bold mb-4">
            Thanks for being part of my journey!
          </p>
          <p className="font-sans text-primary-foreground/80 text-lg">
            Thank you all!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
