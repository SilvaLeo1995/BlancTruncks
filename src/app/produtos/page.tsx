import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ProductCatalog } from "@/components/sections/ProductCatalog";

export const metadata: Metadata = {
  title: "Coleção",
  description:
    "Explore toda a coleção Black Trunks — camisas, calças, shorts, corta-vento, bonés e bermudas, masculino e feminino. Moda premium com DNA do voo livre.",
  alternates: { canonical: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Container width="wide" className="pt-36 pb-24 sm:pt-40 sm:pb-32">
          <header className="max-w-3xl">
            <span className="eyebrow">Lookbook · Coleção 2026</span>
            <h1 className="mt-5 text-balance text-5xl font-semibold uppercase leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
              A coleção
            </h1>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Peças pensadas para quem vive entre o asfalto e o céu. Clique em qualquer peça para
              ampliar. Para comprar, é só chamar a gente no Instagram ou WhatsApp.
            </p>
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground/70">
              Catálogo em construção · algumas imagens são ilustrativas
            </p>
          </header>

          <div className="mt-14">
            <ProductCatalog />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
