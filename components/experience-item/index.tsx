
import { motion } from "framer-motion";
export default function ExperienceItem({ exp, index }: { exp: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative border-b border-white/10 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-20 transition-all hover:bg-white/[0.02]"
        >
            {/* Date and Location */}
            <div className="w-full md:w-1/4 md:px-5">
                <p className="font-mono text-indigo-500 text-xs tracking-widest mb-2">{exp.period}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">{exp.location}</p>
            </div>

            {/* Role and Company */}
            <div className="w-full md:w-3/4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h4 className="text-3xl md:text-5xl font-black tracking-tight uppercase group-hover:text-indigo-400 transition-colors">
                            {exp.role}
                        </h4>
                        <p className="text-xl text-white/60 font-medium mt-2">{exp.company}</p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill: string) => (
                            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-tighter">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4 max-w-3xl">
                    {exp.points.map((point: string, idx: number) => (
                        <li key={idx} className="flex gap-4 text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors">
                            <span className="text-indigo-600 font-bold mt-1">/</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}