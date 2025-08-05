"use client";
import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FiUsers, FiMic, FiFileText, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sofia R.",
    text: "Fidan’s coaching helped me land a job at a US startup. Her insights were incredibly helpful!",
  },
  {
    name: "Liam T.",
    text: "The resume rewrite and LinkedIn tips brought in more recruiters in one week than months before.",
  },
  {
    name: "Aya K.",
    text: "Her career coaching gave me clarity during a huge life transition. Truly life-changing!",
  },
  {
    name: "Carlos M.",
    text: "Thanks to Fidan, I cracked interviews at multiple European tech firms as a non-native speaker.",
  },
  {
    name: "Elena P.",
    text: "She brings empathy, strategy, and real-world results. A rare combination in career guidance.",
  },
];

export default function HomePage() {
  const services = [
    {
      title: "Remote Team Building",
      desc: "I connect top global talent with remote-first companies.",
      icon: <FiUsers size={28} className="text-blue-500" />,
    },
    {
      title: "Interview Coaching",
      desc: "Helping non-native speakers succeed in English-speaking interviews.",
      icon: <FiMic size={28} className="text-blue-500" />,
    },
    {
      title: "Resume & LinkedIn Makeovers",
      desc: "Crafting professional profiles that attract global recruiters.",
      icon: <FiFileText size={28} className="text-blue-500" />,
    },
    {
      title: "Cross-Cultural Communication",
      desc: "Empowering distributed teams to collaborate effectively across borders.",
      icon: <FiGlobe size={28} className="text-blue-500" />,
    },
  ];

  return (
    <main className="bg-white text-gray-800 font-sans scroll-smooth">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-white flex items-center px-8 md:px-16">
        {/* Animated blob background */}
        <div className="absolute inset-0">
          <div className="absolute w-[60vw] h-[60vw] bg-pink-400 opacity-30 rounded-full top-[-10%] left-[-10%] blur-3xl animate-pulse" />
          <div className="absolute w-[40vw] h-[40vw] bg-yellow-300 opacity-20 rounded-full bottom-[-10%] right-[-10%] blur-3xl animate-ping" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
          {/* Left: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm Fidan
            </h1>
            <p className="text-lg md:text-xl max-w-xl font-light text-white/90">
              I help global businesses grow with remote-first strategies, coaching, and communication mastery.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:fidaniummm@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-50 transition"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition"
              >
                📄 View Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center space-y-4 max-w-xs text-center">
              <img
                src="/image/fidan.jpg"
                alt="Fidan's profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow"
              />
              <h3 className="text-2xl font-semibold text-white">Fidan H.</h3>
              <p className="text-white/80 text-sm">
                Remote Hiring Expert · Career Coach · Global Connector
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Title */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold text-gray-900 mb-3"
            >
              Who I Am
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "90px" }}
              transition={{ duration: 0.8 }}
              className="h-1 mx-auto bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-full"
            />
          </div>

          {/* 3 Block Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Block 1: Identity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-indigo-50 border-t-4 border-indigo-400 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                I’m Fidan — a global talent strategist and executive coach. My mission is to bridge cultures, empower individuals, and build remote-first organizations that thrive across borders.
              </p>
            </motion.div>

            {/* Block 2: Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-purple-50 border-l-4 border-purple-400 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                With over a decade of experience, I’ve led international recruitment drives, coached professionals worldwide, and consulted leaders on scaling diverse, high-performing teams.
              </p>
            </motion.div>

            {/* Block 3: Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-50 border-r-4 border-yellow-400 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                I help global businesses hire smarter and help individuals unlock career breakthroughs. My work makes hiring human and growth intentional — every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div>{s.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-blue-700">{s.title}</h3>
                    <p className="text-gray-700">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 mb-6"
          >
            What People Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 rounded-full mx-auto mb-12"
          />

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="max-w-5xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-3xl shadow-lg p-8 h-full flex flex-col justify-between text-left">
                  <div>
                    <div className="text-2xl text-indigo-400 mb-4">“</div>
                    <p className="text-gray-800 italic">{t.text}</p>
                  </div>
                  <p className="mt-6 font-bold text-indigo-700">— {t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-lg mb-6">
            Whether you're hiring globally or seeking career growth, I’d love to support you.
          </p>
          <a
            href="mailto:fidaniummm@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-xl text-lg font-semibold hover:scale-105 hover:bg-indigo-50 transition-transform duration-300 shadow-lg"
          >
            <FaEnvelope /> Contact Me
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-600 text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://www.linkedin.com/in/fidanh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:fidaniummm@gmail.com" className="hover:text-indigo-700">
            <FaEnvelope size={20} />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Fidan. All rights reserved.
      </footer>
    </main>
  );
}
