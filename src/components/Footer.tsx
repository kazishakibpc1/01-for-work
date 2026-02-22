import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#161B22]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-foreground mb-2">THE KAZI SHAKIB</h4>
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
