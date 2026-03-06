import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  { label: "Average onboarding", value: "5 days" },
  { label: "Agent availability", value: "24/7" },
  { label: "Data ownership", value: "100% client-side" },
];

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
              Built for operations, support, and internal teams
            </Badge>

            <div className="space-y-5">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Enterprise AI agents
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  that run daily operations.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Deploy specialized AI teammates for customer support, HR workflows, legal review, and revenue operations — with governance, observability, and secure integrations.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="px-7 py-6 text-base shadow-lg">
                <a href="#custom">
                  Schedule Executive Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-7 py-6 text-base">
                <a href="#agents">Explore Agent Catalog</a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border border-border/70 bg-card/80 p-4 shadow-sm">
                  <p className="text-xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-2xl">
              <img
                alt="AI Agent command center with workflow and operations visibility"
                className="h-auto w-full"
                src="/lovable-uploads/28565372-09ee-4ff0-99e2-e634d5042955.png"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-card p-4 shadow-sm">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-foreground">SOC-ready architecture</p>
                <p className="text-xs text-muted-foreground">Audit-friendly logs and transparent action trails.</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card p-4 shadow-sm">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-foreground">Fast time-to-value</p>
                <p className="text-xs text-muted-foreground">Production-ready workflows with guided rollout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
