/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AcademicPortfolio } from "./components/AcademicPortfolio";
import { Experience } from "./components/Experience";
import { ChessSkills } from "./components/ChessSkills";
import { Awards } from "./components/Awards";
import { FunFact } from "./components/FunFact";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans">
      <Header />
      <main className="space-y-12 md:space-y-24 pb-24">
        <Hero />
        <About />
        <AcademicPortfolio />
        <Experience />
        <ChessSkills />
        <Awards />
        <FunFact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
