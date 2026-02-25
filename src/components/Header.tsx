import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Briefcase, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Menu, 
  X,
  Trophy,
  GraduationCap,
  Home,
  User,
  Brain,
  Mail,
  BookOpen
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";

// Custom Knight icon for FIDE since Lucide doesn't have a perfect chess knight
const KnightIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 22H5" />
    <path d="M13.5 2H10C8.89543 2 8 2.89543 8 4V5C8 6.10457 8.89543 7 10 7H11.5" />
    <path d="M14 9.5C14 10.8807 12.8807 12 11.5 12H9C7.34315 12 6 13.3431 6 15V18H18V15C18 13.3431 16.6569 12 15 12H14V9.5Z" />
    <path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V7" />
  </svg>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Academics", path: "/academics", icon: GraduationCap },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Skills", path: "/skills", icon: Brain },
    { name: "Awards", path: "/awards", icon: Trophy },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.name);
    } else if (currentPath === "/") {
      setActiveTab("Home");
    }
  }, [location]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-2 p-2 bg-white/80 dark:bg-[#161B22]/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full shadow-sm transition-all duration-300 max-w-6xl w-full justify-between">
        
        {/* Logo */}
        <Link to="/" className="pl-4 pr-2 cursor-pointer group">
          <span className="font-bold text-xl tracking-tighter text-foreground group-hover:text-accent transition-colors">
            THE KAZI SHAKIB<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors tracking-wide",
                activeTab === item.name 
                  ? "text-foreground" 
                  : "text-secondary hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              )}
              style={{ letterSpacing: "0.05em" }}
            >
              {activeTab === item.name && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 bg-white dark:bg-[#21262D] rounded-full shadow-sm border border-black/5 dark:border-white/5 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icon Dock */}
        <div className="hidden md:flex items-center gap-2 pr-2 pl-4 border-l border-black/5 dark:border-white/10">
          <a href="#" className="p-2 text-secondary hover:text-foreground transition-colors" title="FIDE Profile">
            <KnightIcon className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-secondary hover:text-accent transition-colors relative group" title="DummyMarketorr">
            <div className="absolute inset-0 bg-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            <Briefcase className="w-5 h-5 relative z-10" />
          </a>
          <a href="#" className="p-2 text-secondary hover:text-foreground transition-colors" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white dark:bg-[#161B22] rounded-2xl shadow-xl border border-black/5 dark:border-white/10 p-4 flex flex-col gap-2 lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  activeTab === item.name 
                    ? "bg-black/5 dark:bg-white/10 text-foreground" 
                    : "text-secondary hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-black/5 dark:bg-white/10 my-2" />
            <div className="flex justify-around p-2">
              <KnightIcon className="w-5 h-5 text-secondary" />
              <Briefcase className="w-5 h-5 text-secondary" />
              <Linkedin className="w-5 h-5 text-secondary" />
              <Github className="w-5 h-5 text-secondary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
