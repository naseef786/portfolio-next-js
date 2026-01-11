export default function ExpertiseCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
      <div className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}