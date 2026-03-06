import wevoLogo from "@/assets/wevo-logo.png";
import businessBelArabyLogo from "@/assets/business-bel-araby-logo.jpg";

export const TrustStrip = () => {
  const assurances = ["Security-first deployment", "Enterprise SLAs", "Dedicated implementation support"];

  return (
    <section className="border-y border-border bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-5 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Trusted by operations leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              <img src={wevoLogo} alt="Wevo" className="h-11 w-auto object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
              <img
                src={businessBelArabyLogo}
                alt="Business Bel Araby"
                className="h-11 w-auto object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {assurances.map((item) => (
              <div key={item} className="rounded-lg border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
