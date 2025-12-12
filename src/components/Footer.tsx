const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-primary/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-display text-sm font-semibold text-foreground">
            Class of 2025 • Utah Tech University
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Bachelor of Science in Information Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
