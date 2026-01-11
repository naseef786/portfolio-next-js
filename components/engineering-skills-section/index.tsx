import { motion } from "framer-motion";

const EngineeringSkills = () => {
    const departments = [
        {
            title: "Frontend Engineering",
            skills: ["React 18 / Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
            icon: "◈",
            gridSpan: "md:col-span-1"
        },
        {
            title: "Mobile Development",
            skills: ["React Native", "Expo Ecosystem", "IOS/Android Deployment", "Mobile UI Patterns"],
            icon: "📱",
            gridSpan: "md:col-span-1"
        },
        {
            title: "Backend Systems",
            skills: ["Node.js / Express", "PostgreSQL & Prisma", "MongoDB", "REST & GraphQL"],
            icon: "◇",
            gridSpan: "md:col-span-2" // Makes this card wider for a "Bento" look
        },
        {
            title: "DevOps & Cloud",
            skills: ["AWS (EC2, S3)", "Docker", "CI/CD Pipelines", "Nginx"],
            icon: "⚙",
            gridSpan: "md:col-span-2"
        },
        {
            title: "Tools & Workflow",
            skills: ["Git / GitHub", "Postman", "Vercel", "Jest / Cypress"],
            icon: "⚒",
            gridSpan: "md:col-span-2"
        }
    ];

    return (
        <section id="skills" className="relative py-24 px-6 md:px-20 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[1px] bg-indigo-500" />
                        <p className="font-mono text-indigo-500 tracking-[0.3em] uppercase text-xs">Technical Arsenal</p>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Core <span className="text-white/20">Competencies</span>
                    </h2>
                </div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {departments.map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-indigo-500/40 transition-all duration-500 ${dept.gridSpan}`}
                        >
                            <div className="text-2xl text-indigo-500 mb-6 font-mono">{dept.icon}</div>
                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors">
                                {dept.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {dept.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-[11px] font-mono bg-white/5 border border-white/5 rounded-full text-white/50 group-hover:text-white/90 group-hover:border-indigo-500/20 transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Decorative Index */}
                            <div className="absolute top-6 right-8 font-mono text-[10px] text-white/10 group-hover:text-indigo-500/40">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default EngineeringSkills;