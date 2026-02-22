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
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans">
      <Header />
      <main className="space-y-12 md:space-y-24 pb-24">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="academics">
          <AcademicPortfolio />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <ChessSkills />
        </section>
        <section id="awards">
          <Awards />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <FunFact />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
