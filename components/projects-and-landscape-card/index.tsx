import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
// --- CARD COMPONENT (Matching Desktop Screenshot Ratio) ---
export default function ProjectLandscapeCard({ project, index, parentInView, playClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      // 2. Use whileInView instead of animate
      whileInView={{ opacity: 1, x: 0 }}
      // 3. margin: "-100px" tells it to trigger as soon as it's 100px from the bottom
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className="group relative flex flex-col gap-6"
    >
      {/* Image Container - Forced 16:9 Ratio */}

      <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
        <div
          className={`absolute inset-0 scale-110  group-hover:scale-100 ${index !== 4 ? "transition-transform duration-[2s]" : ""}`}
          data-swiper-parallax="20%"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating Tag */}
        <div className="absolute top-6 left-6 z-20">
          <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center gap-2">
            <Globe size={12} className="text-indigo-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Live Project</span>
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div className="px-2">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-3xl md:text-4xl font-black tracking-tighter uppercase group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h4>
            <div className="flex gap-3 mt-2">
              {project.tags.map((t: string) => (
                <span key={t} className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            onClick={playClick}
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:bg-indigo-500 hover:text-white transition-colors"
          >
            <ArrowUpRight size={28} />
          </motion.a>
        </div>

        <p className="text-white/40 text-sm md:text-base max-w-2xl leading-relaxed line-clamp-2">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
}