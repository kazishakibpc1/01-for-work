import { motion } from "motion/react";
import { Send, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
        <p className="text-secondary">
          Whether you want to discuss strategy, business, or just play a game of blitz.
        </p>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 bg-white dark:bg-[#161B22] p-8 rounded-[32px] border border-black/5 dark:border-white/5 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-foreground uppercase tracking-wide">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border-transparent focus:border-accent focus:bg-transparent focus:ring-0 transition-all outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-foreground uppercase tracking-wide">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border-transparent focus:border-accent focus:bg-transparent focus:ring-0 transition-all outline-none"
              placeholder="hello@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-bold text-foreground uppercase tracking-wide">Subject</label>
          <input 
            type="text" 
            id="subject" 
            className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border-transparent focus:border-accent focus:bg-transparent focus:ring-0 transition-all outline-none"
            placeholder="Collaboration / Inquiry"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-foreground uppercase tracking-wide">Message</label>
          <textarea 
            id="message" 
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border-transparent focus:border-accent focus:bg-transparent focus:ring-0 transition-all outline-none resize-none"
            placeholder="Your message here..."
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button type="submit" className="flex-1 px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            Send Message <Send className="w-4 h-4" />
          </button>
          
          <a 
            href="#" 
            className="px-8 py-4 bg-transparent border border-black/10 dark:border-white/10 text-foreground rounded-full font-bold hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center gap-2 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-[#0077B5]" /> Direct Message
          </a>
        </div>
      </motion.form>
    </section>
  );
}
