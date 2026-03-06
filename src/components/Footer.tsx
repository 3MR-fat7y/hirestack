export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="text-lg font-semibold tracking-tight text-foreground">HireStack</div>
            <p className="max-w-md text-sm text-muted-foreground">
              AI agents for enterprise operations, designed for visibility, governance, and measurable business outcomes.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2024 HireStack. Built for modern operations teams.
          </div>
        </div>
      </div>
    </footer>
  );
};
