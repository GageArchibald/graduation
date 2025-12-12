import { CheckCircle2, Trophy, Rocket, Star } from "lucide-react";

const AchievementsSection = () => {
  const milestones = [
    { year: "Year 1", title: "Foundations", emoji: "", description: "Discovered the foundation of information technology" },
    { year: "Year 2", title: "Core Concepts", emoji: "", description: "Advanced programming and systems knowledge" },
    { year: "Year 3", title: "Applied Learning", emoji: "", description: "Developed professional-grade applications" },
    { year: "Year 4", title: "Capstone Complete", emoji: "", description: "Completed Bachelor's in Information Technology" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary border border-primary/20 mb-6">
            <Trophy className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-primary">Milestones</span>
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
            Four years of consistent growth and achievement in Information Technology
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 bg-secondary rounded-lg p-6 border border-primary/10 hover:border-primary/40 hover:bg-secondary/80 transition-all duration-300 group"
            >
              {/* Number indicator */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                    {milestone.title}
                  </h3>
                  <span className="text-xs font-semibold text-muted-foreground">{milestone.year}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final achievement */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary rounded-lg p-8 md:p-12">
            <div className="mb-4">
              <Trophy className="w-10 h-10 mx-auto text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Degree Conferred
            </h3>
            <div className="space-y-1 font-sans text-primary-foreground/90 text-sm">
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
