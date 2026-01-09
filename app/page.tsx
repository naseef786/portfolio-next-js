"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence
} from "framer-motion";
import { FileDown, Download } from "lucide-react";
import {
  Github, Linkedin, Mail, ExternalLink,
  Smartphone, Database, ArrowUpRight,
  Code2, ChevronLeft, ChevronRight, Menu, X, Globe
} from "lucide-react";
import { useInView } from "framer-motion";

import { Navigation, Pagination, Mousewheel, FreeMode, Parallax } from "swiper/modules";
// --- Swiper Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { useSystemSound } from "@/hooks/useSystemSound";

// --- DATA ---
const MY_PROJECTS = [
  {
    title: "Appointment Booking",
    desc: "Car detailing booking system with Stripe payments and advanced scheduling.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Material UI"],
    image: "/images/T-Bros-Website-Screenshot.png",
    link: "https://t-bros.ca/booking",
  },
  {
    title: "AI Image Platform",
    desc: "AI background removal & generation platform using Photoroom API.",
    tags: ["React", "Tailwind", "Redux", "AI"],
    image: "/images/Tsour-Website-Screenshot.png",
    link: "https://tsour-dev.ditinus.com",
  },
  {
    title: "FaceMe Live",
    desc: "Real-time video calling mobile app with VOIP and PayPal integration.",
    tags: ["React Native", "Firebase", "Zego", "Stripe", "Pubnub", "AWS SDK"],
    image: "/images/FaceMe-Website-Screenshot.png",
    link: "https://faceme.live/",
  },
  {
    title: "Travel CRM",
    desc: "Role-based CRM for travel agencies with MySQL & Firebase.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    image: "/images/Millwoods-CRM-Website-Screenshot.png",
    link: "http://mwcrmdev.cyberace.site/login",
  },
  {
    title: "Restaurant Manager",
    desc: "Real-time restaurant order tracking mobile app.",
    tags: ["React Native", "TypeScript", "Firebase"],
    image: "/images/RestroManager-Website-Screenshot.png",
    link: "https://play.google.com/store/apps/details?id=com.cyberace.restromanagerplus",
  },
];
const EXPERIENCES = [
  {
    company: "Ditinus Technology Pvt. Ltd",
    location: "Mohali, Punjab",
    role: "MERN Stack Developer",
    period: "Dec 2023 — Sep 2025",
    points: [
      "Led end-to-end development of scalable MERN stack applications with Stripe/Razorpay integration.",
      "Project Lead for a U.S.-based React Native real-time communication app, managing delivery timelines.",
      "Optimized AWS environments and handled CI/CD pipelines for high-availability deployment.",
      "Mentored junior developers and enforced high code quality through rigorous reviews."
    ],
    skills: ["AWS", "Firebase", "Stripe", "React Native", "Redux", "Next.js", "Flutter"]
  },
  {
    company: "Bridgeon Solutions LLP",
    location: "Calicut, Kerala",
    role: "Software Developer",
    period: "Oct 2022 — Nov 2023",
    points: [
      "Developed responsive MERN applications, transitioning from Intern to Full-Time due to performance.",
      "Designed RESTful APIs using Node.js/Express with MongoDB architecture.",
      "Built internal HRM and tracking tools focusing on modular components and clean code."
    ],
    skills: ["Node.js", "Express", "MongoDB", "React", "React Native", "MERN Stack"]
  }
];

function StatItem({ Number, Label }: { Number: string; Label: string }) {
  return (
    <div className="group">
      <h4 className="text-4xl md:text-6xl font-black tracking-tighter group-hover:text-indigo-500 transition-colors duration-300">
        {Number}
      </h4>
      <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40 mt-1">
        {Label}
      </p>
    </div>
  );
}
const RoleSwitcher = () => {
  const roles = ["MERN Stack", "React Native", "Next.js", "Node.js", "Full Stack", "React"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 overflow-hidden h-[24px]">
      <span className="font-bold text-sm md:text-base">MUHAMMAD<span className="hidden sm:inline"> NASEEF</span></span>
      <span className="text-white/30">|</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="text-indigo-400 font-mono text-[10px] md:text-xs font-bold uppercase tracking-tighter truncate"
        >
          {roles[index]} Developer
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function PortfolioPage() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRef = useRef(null);
  // Fixes the animation issue by tracking the section instead of individual cards
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const handleDownload = () => {
    // 1. Play the systematic click sound
    playClick();

    // 2. Trigger the download
    const link = document.createElement('a');
    link.href = '/Muhammad_Naseef_Resume.pdf'; // Path in your /public folder
    link.download = 'Naseef_MERN_Stack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const yHeroText = useTransform(smoothY, [0, 0.2], [0, -100]);
  const yBgShape = useTransform(smoothY, [0, 1], [0, -300]);
  const playClick = useSystemSound('/sounds/robo.mp3');
  return (
    <main ref={containerRef} className="bg-[#030303] text-white selection:bg-indigo-500/40 overflow-x-hidden">

      {/* --- 1. RESPONSIVE FLOATING HEADER --- */}
      <nav className="fixed top-4 md:top-6 inset-x-0 z-[100] px-4 md:px-6">
        <div className="max-w-5xl mx-auto backdrop-blur-xl bg-black/60 border border-white/10 rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-2xl">
          <RoleSwitcher />

          <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/50">
            <a href="#projects" onClick={playClick} className="hover:text-white transition-colors">Work</a>
            <a href="#expertise" onClick={playClick} className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" onClick={playClick} className="hover:text-white transition-colors text-indigo-400">Hire Me</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* --- 2. FULLSCREEN MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 z-[200] flex flex-col items-center justify-center gap-8 p-6 backdrop-blur-2xl"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-3 bg-white/5 rounded-full border border-white/10"
            >
              <X size={24} />
            </button>
            {['Home', 'Projects', 'Expertise', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black tracking-tighter"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 3. ENHANCED RESPONSIVE HERO --- */}
      <section id="home" className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden pt-24">

        {/* --- PARALLAX BACKGROUND ELEMENTS --- */}
        <motion.div
          style={{ y: yBgShape }}
          className="absolute top-[-5%] right-[-10%] w-[70vw] h-[70vw] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none z-0"
        />
        <motion.div
          style={{ y: useTransform(smoothY, [0, 1], [0, 200]) }}
          className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-600/5 blur-[80px] rounded-full pointer-events-none z-0"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: yHeroText }}
          >
            {/* 1. TOP LABEL */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-indigo-500" />
              <p className="font-mono text-indigo-500 tracking-[0.3em] uppercase text-[10px] md:text-sm">
                Availability: Open for Projects
              </p>
            </div>

            {/* 2. MAIN HEADLINE WITH INTEGRATED DATA */}
            <h1 className="text-[13vw] sm:text-[11vw] lg:text-[8.5vw] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              Crafting<br />
              <span className="text-white/20">High-End</span><br />
              <div className="flex items-center flex-wrap gap-x-4">
                <span>Digital</span>
                {/* Subtle accent color for 'Experiences' */}
                <span className="text-indigo-600">.</span>
              </div>
            </h1>

            {/* 3. DYNAMIC TECH PILLS */}
            <div className="flex flex-wrap gap-2 md:gap-4 mb-16">
              {["MERN Stack", "React Native", "Next.js 14", "Node.js", "Cloud Architecture"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-mono font-bold hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
            <HeroResumeButton playClick={playClick} />

            {/* 4. DATA COUNTERS (The Experience Stats) */}
            <div className="grid grid-cols-2 md:flex md:gap-20 gap-8 border-t border-white/10 pt-12">
              <StatItem Number="03+" Label="Years of Experience" />
              <StatItem Number="15+" Label="Projects Delivered" />
              <StatItem Number="100%" Label="Client Satisfaction" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. EXPERTISE SECTION --- */}
      <section id="expertise" className="py-12 md:py-32 px-6 md:px-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard icon={<Code2 />} title="Full Stack" desc="MERN stack specialist. Scalable backends with optimized React/Next.js frontends." />
            <ExpertiseCard icon={<Smartphone />} title="Mobile First" desc="High-performance React Native apps with cross-platform excellence." />
            <ExpertiseCard icon={<Globe />} title="SEO & Scale" desc="Next.js architectures designed for high search visibility and user conversion." />
          </div>
        </div>
      </section>

      {/* --- 5. PREMIUM PROJECT SLIDER --- */}
      <section
        id="projects"
        ref={sectionRef}
        className="py-20 md:py-20 bg-[#030303] text-white overflow-hidden"
      >
        <div className="max-w-350 mx-auto px-6 md:px-20">

          {/* --- HEADER --- */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-12 h-[1px] bg-indigo-500"></span>
                <span className="text-indigo-500 font-mono text-xs tracking-widest uppercase">Case Studies</span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
              >
                Selected <br /> <span className="text-white/20">Works.</span>
              </motion.h3 >
            </div>

            {/* Custom Navigation */}
            <div className="flex gap-4">
              <button onClick={playClick} className="swiper-prev-btn w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button onClick={playClick} className="swiper-next-btn w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* --- SLIDER --- */}
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, FreeMode, Parallax]}
            parallax={true}
            spaceBetween={40}
            slidesPerView={1}
            speed={1000}
            grabCursor={true}
            watchSlidesProgress={true}
            navigation={{ nextEl: '.swiper-next-btn', prevEl: '.swiper-prev-btn' }}
            onSlideChange={playClick}
            breakpoints={{
              1024: { slidesPerView: 1.5 }, // Shows half of the next desktop screenshot
              1440: { slidesPerView: 1.8 },
            }}
            className="!overflow-visible"
          >
            {MY_PROJECTS.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectLandscapeCard
                  project={project}
                  index={i}
                  parentInView={isInView}
                  playClick={playClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="experience" className=" md:py-32 bg-[#030303] text-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* --- SECTION HEADER --- */}
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-20 gap-8">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-12 h-[1px] bg-indigo-500"></span>
                <span className="text-indigo-500 font-mono text-[10px] tracking-[0.4em] uppercase">Trajectory</span>
              </motion.div>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                History<span className="text-white/20">.</span>
              </h3>
            </div>
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest pb-4">
              3+ Years Professional Journey
            </p>
          </div>

          {/* --- EXPERIENCE LIST --- */}
          <div className="flex flex-col border-t border-white/10">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. ENHANCED PREMIUM FOOTER --- */}
      <footer id="contact" className="relative bg-white text-black pt-24 md:pt-40 pb-12 px-6 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">

        {/* Big Background Text - Subtle Parallax */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none opacity-[0.05] text-[10vw] font-black italic">
          GET IN TOUCH
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-20 md:mb-32">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/5 text-[10px] font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-[14vw] md:text-[10vw] font-black tracking-tighter leading-[0.8] mb-12 uppercase"
            >
              Let's create<br />
              <span className="text-indigo-600 italic">together.</span>
            </motion.h2>

            <motion.a
              href="mailto:naseef321ac@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 bg-black text-white px-10 py-6 md:px-16 md:py-10 rounded-full text-xl md:text-3xl font-bold transition-all hover:bg-indigo-600 shadow-2xl"
            >
              naseef321ac@gmail.com
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={32} />
            </motion.a>
          </div>

          {/* Footer Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-20 border-t border-black/10 text-sm">

            {/* Column 1: Brand & Time */}
            <div className="space-y-4">
              <img
                src={"/images/favicon.png"}
                alt={"N.Dev Logo"}
                className="w-40 h-20 object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
              {/* <h4 className="font-black text-xl tracking-tighter">N<span className="text-indigo-600">.</span>DEV</h4> */}
              <div className="font-mono text-[10px] uppercase tracking-widest text-indigo-800">
                <p>Local Time</p>
                <p className="text-black font-bold">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} GMT+5</p>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase text-indigo-500 mb-2">Navigation</p>
              {['Home', 'Work', 'Expertise', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-bold hover:text-indigo-600 transition-colors w-fit">{item}</a>
              ))}
            </div>

            {/* Column 3: Socials */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase text-indigo-500 mb-2">Socials</p>
              <a href="https://linkedin.com/in/muhammad-naseef-6b342926a" className="font-bold hover:text-indigo-600 transition-colors w-fit flex items-center gap-2">LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/naseef786" className="font-bold hover:text-indigo-600 transition-colors w-fit flex items-center gap-2">GitHub <ArrowUpRight size={14} /></a>
              <a href="https://twitter.com/naseef_ac" className="font-bold hover:text-indigo-600 transition-colors w-fit flex items-center gap-2">Twitter <ArrowUpRight size={14} /></a>
            </div>

            {/* Column 4: Location */}
            <div className="md:text-right">
              <p className="font-mono text-[10px] uppercase text-indigo-500 mb-4">Location</p>
              <p className="font-bold text-lg leading-tight">
                Based in Dubai,<br />
                Working Worldwide.
              </p>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">
            <p>© 2026 MUHAMMAD NASEEF. ALL RIGHTS RESERVED.</p>
            <p>EST. 2022</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function ExpertiseCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
      <div className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function HeroResumeButton({ playClick }: any) {

  const handleDownload = () => {
    // 1. Play the systematic click sound
    playClick();

    // 2. Trigger the download
    const link = document.createElement('a');
    link.href = '/Resumes/Muhammad_Naseef_Resume.pdf'; // Path in your /public folder
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
// --- CARD COMPONENT (Matching Desktop Screenshot Ratio) ---
function ProjectLandscapeCard({ project, index, parentInView, playClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={parentInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="group relative flex flex-col gap-6"
    >
      {/* Image Container - Forced 16:9 Ratio */}
      <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
        <div
          className="absolute inset-0 scale-110 transition-transform duration-[2s] group-hover:scale-100"
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

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
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