import { useState } from "react";
import { AgentCard } from "./AgentCard";
import { HireModal } from "./HireModal";
import { WorkSampleModal } from "./WorkSampleModal";
import adamAvatar from "@/assets/adam-avatar.png";
import sarahAvatar from "@/assets/sarah-avatar.png";
import omarAvatar from "@/assets/omar-avatar.png";

export const AgentsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");

  const handleHire = (agentName: string) => {
    setSelectedAgent(agentName);
    setIsModalOpen(true);
  };

  const handleViewSample = (agentName: string) => {
    setSelectedAgent(agentName);
    setIsSampleModalOpen(true);
  };

  const agents = [
    {
      name: "Adam",
      role: "Revenue Operations Agent",
      level: "Mid-Level (Autonomous Execution)",
      industries: "Retail, E-commerce, Food & Beverage",
      description:
        "Automates WhatsApp outreach, cart recovery, and order updates to improve conversion and reduce support load.",
      avatar: adamAvatar,
    },
    {
      name: "Sarah",
      role: "People Operations Agent",
      level: "Junior Associate (Policy-Aware)",
      industries: "Corporate, Manufacturing, BPO",
      description:
        "Answers employee policy questions, supports onboarding, and keeps HR communications consistent and available 24/7.",
      avatar: sarahAvatar,
    },
    {
      name: "Omar",
      role: "Legal Operations Agent",
      level: "Junior Analyst (Research Focused)",
      industries: "Legal, Real Estate, Advisory",
      description:
        "Searches large contract and legal document sets in seconds to surface clauses, risks, and precedent insights.",
      avatar: omarAvatar,
    },
  ];

  return (
    <>
      <section id="agents" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">Choose your AI workforce by function</h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                Every agent is packaged with prebuilt workflows, KPI tracking, and enterprise-ready handover support.
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.name}
                  {...agent}
                  onHire={() => handleHire(agent.name)}
                  onViewSample={() => handleViewSample(agent.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <HireModal open={isModalOpen} onOpenChange={setIsModalOpen} agentName={selectedAgent} isCustomHire={false} />

      <WorkSampleModal open={isSampleModalOpen} onOpenChange={setIsSampleModalOpen} agentName={selectedAgent} />
    </>
  );
};
