import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
export default function HeroResumeButton({ playClick }: any) {

  const handleDownload = () => {
    // 1. Play the systematic click sound
    playClick();

    // 2. Trigger the download
    const link = document.createElement('a');
    link.href = '/resumes/resume.pdf'; // Path in your /public folder
    link.download = 'Naseef_MERN_Stack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-3 px-8 py-3 mb-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all"
    >
      {/* Animated Background Slide Effect */}
      <div className="absolute inset-0 bg-indigo-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />

      {/* Content Layer (z-10 to stay above the background slide) */}
      <span className="relative z-10 text-sm flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        DOWNLOAD CV
        <FileDown size={16} className=" transition-transform" />
      </span>
    </motion.button>
  );
}