import { motion } from "motion/react";
import { 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  Music, 
  MessageCircle, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  ExternalLink,
  Code,
  Globe
} from "lucide-react";

export function About() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
        <p className="text-secondary">
          Learn more about my background, interests, and how to get in touch
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile & Bio */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-black/5 dark:border-white/5 shadow-sm flex-shrink-0">
              <img 
                src="https://picsum.photos/seed/profile/400/400" 
                alt="The Kazi Shakib" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-3xl font-bold text-foreground">The Kazi Shakib</h3>
              <p className="text-secondary text-lg">Chess Strategist | Digital Entrepreneur</p>
              <div className="flex items-center gap-2 text-secondary text-sm">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-secondary text-sm">
                <span className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-xs font-medium">
                  Pronouns: He/Him
                </span>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-4 text-secondary leading-relaxed">
            <h4 className="text-xl font-bold text-foreground">About</h4>
            <p>
              I'm a passionate strategist and entrepreneur currently building brands at DummyMarketorr. 
              My journey began on the 64 squares of a chessboard, where I learned the art of 
              anticipating moves and managing pressure.
            </p>
            <p>
              Beyond chess, I'm deeply interested in digital marketing, business strategy, and 
              technology. I believe in applying the rigorous logic of chess to solve complex 
              business problems. Whether it's optimizing a campaign or calculating a mating net, 
              I thrive on the challenge.
            </p>
            <p>
              Currently, I'm scaling my agency and exploring the intersection of AI and marketing. 
              I'm always excited to collaborate on interesting projects that require strategic thinking.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-4">
              <div className="p-3 bg-background rounded-lg text-accent">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-foreground">FIDE Rated 1850+</h5>
                <p className="text-xs text-secondary">Competitive Chess Player</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-4">
              <div className="p-3 bg-background rounded-lg text-accent">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-foreground">Founder</h5>
                <p className="text-xs text-secondary">DummyMarketorr Agency</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-4">
              <div className="p-3 bg-background rounded-lg text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-foreground">BBA Graduate</h5>
                <p className="text-xs text-secondary">Business Administration</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-4">
              <div className="p-3 bg-background rounded-lg text-accent">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-foreground">100+ Clients</h5>
                <p className="text-xs text-secondary">Satisfied Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Connect & Stats */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-foreground">Connect With Me</h4>
          
          {/* Social Links List */}
          <div className="space-y-3">
            <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-foreground" />
                <div>
                  <p className="font-bold text-foreground text-sm">GitHub</p>
                  <p className="text-xs text-secondary">Open source & projects</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
            </a>

            <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                <div>
                  <p className="font-bold text-foreground text-sm">LinkedIn</p>
                  <p className="text-xs text-secondary">Professional profile</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
            </a>

            <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-bold text-foreground text-sm">Work Email</p>
                  <p className="text-xs text-secondary">hello@dummymarketorr.com</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
            </a>

            <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-foreground" />
                <div>
                  <p className="font-bold text-foreground text-sm">Twitter / X</p>
                  <p className="text-xs text-secondary">Updates & thoughts</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex gap-3">
            <a href="#" className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-secondary hover:text-foreground">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-secondary hover:text-foreground">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-secondary hover:text-foreground">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-secondary hover:text-foreground">
              <Music className="w-5 h-5" />
            </a>
          </div>

          {/* Strategic Platforms Stats */}
          <div className="pt-6">
            <h4 className="text-xl font-bold text-foreground mb-4">Strategic Platforms</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Chess.com</p>
                    <p className="text-xs text-secondary">Rapid: 1900+</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
              </a>

              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Upwork</p>
                    <p className="text-xs text-secondary">Top Rated Plus</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
              </a>

              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="font-bold text-foreground text-sm">LeetCode</p>
                    <p className="text-xs text-secondary">Problem Solving</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
