import { Routes, Route } from "react-router-dom";
import { ReactNode } from "react";
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

// Wrapper components to add consistent top padding for fixed header
const PageWrapper = ({ children }: { children: ReactNode }) => (
  <div className="pt-24 md:pt-32 min-h-[80vh]">{children}</div>
);

const HomePage = () => (
  <>
    <Hero />
    <FunFact />
  </>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/academics" element={<PageWrapper><AcademicPortfolio /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><ChessSkills /></PageWrapper>} />
          <Route path="/awards" element={<PageWrapper><Awards /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
