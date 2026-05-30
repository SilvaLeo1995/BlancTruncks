import { Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { CTAButton } from "@/components/common/CTAButton";

const partners = [
  { name: "SkyBrasil", type: "Escola de voo livre" },
  { name: "Aeroclub", type: "Clube de parapente" },
  { name: "Altus Gear", type: "Equipamentos técnicos" },
  { name: "Fly Minas", type: "Associação MG" },
  { name: "Condor Pro", type: "Wingsuit team" },
  { name: "Vento Livre", type: "Escola acrobática" },
  { name: "Summit BH", type: "Loja especializada" },
];

export function Partners() {
  return (
    <Section id="parceiros">
      <Container width="wide">
        <SectionTitle
          eyebrow="Parceiros & apoiadores"
          title="Quem voa com a gente"
          description="Marcas e escolas que confiam na Black Trunks."
          align="center"
          className="mx-auto"
        />
      </Container>

      {/* Carrossel contínuo (full-bleed), pausa no hover */}
      <div className="group relative mt-14 flex overflow-hidden">
        {/* Fades nas bordas */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
        />

        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] gap-5 pr-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) =>
            partners.map((partner) => (
              <Card
                key={`${copy}-${partner.name}`}
                className="flex w-56 shrink-0 flex-col items-center justify-center gap-1 p-8 text-center transition-colors duration-300 hover:border-accent/40"
                aria-hidden={copy === 1}
              >
                <span className="font-mono text-base font-medium uppercase tracking-[0.15em]">
                  {partner.name}
                </span>
                <span className="text-xs text-muted-foreground">{partner.type}</span>
              </Card>
            )),
          )}
        </div>
      </div>

      <Container width="wide" className="mt-12 flex justify-center">
        <CTAButton href="/#contato" variant="outline">
          <Plus />
          Seja parceiro
        </CTAButton>
      </Container>
    </Section>
  );
}
