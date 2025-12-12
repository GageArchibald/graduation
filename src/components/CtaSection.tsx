import { Heart, PartyPopper, Rocket, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        {/* Big thank you */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary border border-primary/20 mb-8">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You for <span className="text-primary">Supporting Me</span>
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To my family, friends, professors, and everyone who believed in me through this incredible journey.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-secondary rounded-lg p-8 border border-primary/10 hover:border-primary/30 transition-colors">
            <Rocket className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="font-display text-lg font-bold text-foreground mb-3">Current Role</h3>
            <p className="font-sans text-sm text-muted-foreground">Technology Professional at St. George City, passionate about using technology to serve the community.</p>
          </div>
          <div className="bg-secondary rounded-lg p-8 border border-primary/10 hover:border-primary/30 transition-colors">
            <Sparkles className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="font-display text-lg font-bold text-foreground mb-3">Looking Ahead</h3>
            <p className="font-sans text-sm text-muted-foreground">Excited about the opportunities ahead and continuing to grow as a technology professional.</p>
          </div>
        </div>

        {/* Final message */}
        <div className="bg-primary rounded-lg p-8 md:p-12 text-primary-foreground border border-primary">
          <p className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready for the Next Chapter
          </p>
          <p className="font-sans text-primary-foreground/90 text-base">
            Thank you for being part of this journey. Here's to new beginnings!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
