import { CheckCircle2, Trophy, Rocket, Star } from "lucide-react";

const AchievementsSection = () => {
  const milestones = [
    { year: "Year 1", title: "Foundations", emoji: "📚", description: "Discovered the foundation of information technology" },
    { year: "Year 2", title: "Core Concepts", emoji: "💡", description: "Advanced programming and systems knowledge" },
    { year: "Year 3", title: "Applied Learning", emoji: "⚙️", description: "Developed professional-grade applications" },
    { year: "Year 4", title: "Capstone Complete", emoji: "✓", description: "Completed Bachelor's in Information Technology" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-primary">Milestones</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            A four-year journey of growth, learning, and achievement in Information Technology
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 hover:bg-card hover:shadow-md transition-all duration-300 group"
            >
              {/* Number indicator */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <span className="text-sm font-semibold text-primary/70">{milestone.year}</span>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">{milestone.description}</p>
              </div>

              {/* Icon and Checkmark */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="text-2xl">{milestone.emoji}</span>
                <CheckCircle2 className="w-5 h-5 text-primary hidden sm:block" />
              </div>
            </div>
          ))}
        </div>

        {/* Final achievement unlocked */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary via-accent to-primary rounded-xl p-8 md:p-12 shadow-lg">
            <div className="mb-4">
              <Trophy className="w-12 h-12 mx-auto text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Degree Conferred
            </h3>
            <div className="space-y-2 font-sans text-primary-foreground/90">
              <p className="font-semibold">Bachelor of Science</p>
              <p>Information Technology</p>
              <p>Utah Tech University • Class of 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
