import { motion } from "motion/react";
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Sicilian Defense: A Strategic Analysis",
    excerpt: "Exploring the complexities of the Sicilian Defense and how it mirrors modern business negotiation tactics.",
    date: "October 12, 2025",
    author: "Kazi Shakib",
    category: "Chess Strategy",
    image: "https://picsum.photos/seed/chess1/800/600"
  },
  {
    id: 2,
    title: "Scaling DummyMarketorr: From 0 to 5 Clients",
    excerpt: "A transparent look at the early days of my agency and the lessons learned in client acquisition.",
    date: "September 28, 2025",
    author: "Kazi Shakib",
    category: "Entrepreneurship",
    image: "https://picsum.photos/seed/marketing1/800/600"
  },
  {
    id: 3,
    title: "Why I Code at 2 AM",
    excerpt: "The psychology of flow state and why night owls might have a creative advantage.",
    date: "September 15, 2025",
    author: "Kazi Shakib",
    category: "Lifestyle",
    image: "https://picsum.photos/seed/code1/800/600"
  }
];

const categories = ["Chess Strategy", "Entrepreneurship", "Academic Research", "Lifestyle", "Technology"];
const recentPosts = posts.map(p => p.title);

export function Blog() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Thoughts on strategy, business, and life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content - Blog Feed */}
        <div className="lg:col-span-2 space-y-12">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 bg-white dark:bg-[#161B22] rounded-[24px] p-6 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-accent cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="text-accent text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
          
          {/* Pagination Mock */}
          <div className="flex justify-center gap-2 pt-8">
            <button className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 text-foreground font-bold flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors">2</button>
            <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 text-foreground font-bold flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors">3</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search Widget */}
          <div className="p-6 rounded-[24px] bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/5 shadow-sm">
            <h4 className="font-bold text-foreground mb-4">Search</h4>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border-transparent focus:border-accent focus:bg-transparent focus:ring-0 transition-all outline-none text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
            </div>
          </div>

          {/* Categories Widget */}
          <div className="p-6 rounded-[24px] bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/5 shadow-sm">
            <h4 className="font-bold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center justify-between text-secondary hover:text-accent transition-colors text-sm group">
                    <span>{cat}</span>
                    <span className="bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-full text-xs group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {Math.floor(Math.random() * 10) + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Widget */}
          <div className="p-6 rounded-[24px] bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/5 shadow-sm">
            <h4 className="font-bold text-foreground mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              {recentPosts.map((post, i) => (
                <li key={i} className="group cursor-pointer">
                  <h5 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {post}
                  </h5>
                  <span className="text-xs text-secondary">Oct {12 - i}, 2025</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Widget */}
          <div className="p-6 rounded-[24px] bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/5 shadow-sm">
            <h4 className="font-bold text-foreground mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["Strategy", "Business", "Code", "React", "Chess", "Marketing"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-xs font-medium text-secondary hover:bg-accent hover:text-white cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
