import { UserCheck, Link2, LineChart } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Discovery & fit",
      description: "We map your workflows, compliance requirements, and success KPIs to the right AI agent profile.",
    },
    {
      icon: Link2,
      title: "Secure integration",
      description: "Our team connects your systems and knowledge sources with role-based access and clear governance.",
    },
    {
      icon: LineChart,
      title: "Launch & optimize",
      description: "Track outcomes in real time and continuously improve prompts, logic, and automations.",
    },
  ];

  return (
    <section id="process" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">A deployment model enterprise teams trust</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Structured onboarding, transparent milestones, and measurable business impact from day one.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="group relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-[60%] top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                  )}

                  <div className="relative space-y-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-4xl font-bold text-muted-foreground/25">{(index + 1).toString().padStart(2, "0")}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
