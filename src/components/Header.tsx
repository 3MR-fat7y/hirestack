import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-semibold tracking-tight text-foreground">
          HireStack
          <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            Enterprise AI Ops
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#process" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
          <a href="#agents" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Agent Catalog
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#custom" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Solutions
          </a>
        </div>

        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#custom">Talk to Sales</a>
        </Button>
      </nav>
    </header>
  );
};
