import { Github, Linkedin, Mail, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#161B22] border-t border-black/5 dark:border-white/5 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: About */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-foreground">THE KAZI SHAKIB</h4>
          <p className="text-secondary text-sm leading-relaxed">
            A portfolio showcasing the intersection of strategic chess thinking and modern digital marketing. Building brands and winning games.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-black/5 dark:bg-white/5 rounded-full text-secondary hover:bg-accent hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-black/5 dark:bg-white/5 rounded-full text-secondary hover:bg-accent hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-black/5 dark:bg-white/5 rounded-full text-secondary hover:bg-accent hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="text-secondary hover:text-accent transition-colors">Home</a></li>
            <li><a href="#about" className="text-secondary hover:text-accent transition-colors">About Me</a></li>
            <li><a href="#academics" className="text-secondary hover:text-accent transition-colors">Academic Portfolio</a></li>
            <li><a href="#experience" className="text-secondary hover:text-accent transition-colors">Experience</a></li>
            <li><a href="#blog" className="text-secondary hover:text-accent transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Recent Works */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-foreground">Recent Works</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/chess/100/100" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors line-clamp-1">Chess Strategy Guide</p>
                <p className="text-secondary text-xs">Oct 2025</p>
              </div>
            </li>
            <li className="flex gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/marketing/100/100" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors line-clamp-1">Brand Growth Case</p>
                <p className="text-secondary text-xs">Sep 2025</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-foreground">Newsletter</h4>
          <p className="text-secondary text-sm">
            Subscribe to get the latest updates on strategy and business.
          </p>
          <form className="space-y-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border-transparent focus:border-accent focus:bg-transparent focus:ring-0 transition-all outline-none text-sm"
            />
            <button className="w-full px-4 py-2 bg-accent text-white rounded-xl font-bold text-sm hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} The Kazi Shakib. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-secondary hover:text-foreground transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-secondary hover:text-foreground transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
