import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";
import { useState } from "react";
import { HireModal } from "./HireModal";

export const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Dedicated AI agent with role-specific workflows",
    "Operational dashboard with audit history",
    "Unlimited logic and prompt optimization",
    "Implementation and systems integration included",
    "WhatsApp, Email, and internal tooling connectivity",
    "Priority support and quarterly strategy review",
  ];

  return (
    <>
      <section className="bg-background py-20" id="pricing">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">Enterprise-friendly pricing, no hidden fees</h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                Predictable monthly retainer with transparent infrastructure ownership and clear delivery scope.
              </p>
            </div>

            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

              <CardHeader className="relative space-y-2 pb-8 text-center">
                <CardTitle className="text-3xl font-bold md:text-4xl">Standard Agent Retainer</CardTitle>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary md:text-6xl">$150</span>
                  <span className="text-2xl text-muted-foreground">/month</span>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">6-month minimum term, billed semi-annually</p>
              </CardHeader>

              <CardContent className="relative space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Security and data ownership by design</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        API usage and hosting are billed directly to your controlled accounts. You keep full ownership of data,
                        keys, and infrastructure decisions with no markup from HireStack.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button size="lg" onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg shadow-lg">
                    Start With a Discovery Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HireModal open={isModalOpen} onOpenChange={setIsModalOpen} agentName="Standard Retainer" isCustomHire={false} />
    </>
  );
};
