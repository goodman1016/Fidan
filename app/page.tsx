import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800 font-sans scroll-smooth">
      {/* Hero */}
      <section className="relative h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-white flex items-center justify-center text-center px-6">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Hi, I'm Fidan
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mx-auto font-light tracking-wide">
            Helping businesses grow through smart solutions, global teamwork, and clear communication.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I’m a global business professional with deep experience in international collaboration,
            remote hiring, and career coaching. I thrive on building cross-cultural bridges and empowering
            individuals to reach their full potential.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Remote Team Building",
                desc: "I connect top global talent with remote-first companies.",
              },
              {
                title: "Interview Coaching",
                desc: "Helping non-native speakers succeed in English-speaking interviews.",
              },
              {
                title: "Resume & LinkedIn Makeovers",
                desc: "Crafting professional profiles that attract global recruiters.",
              },
              {
                title: "Cross-Cultural Communication",
                desc: "Empowering distributed teams to collaborate effectively across borders.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500"
              >
                <h3 className="text-2xl font-bold mb-2 text-blue-700">{s.title}</h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10 text-gray-900">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sofia R.",
                text: "Fidan’s coaching helped me land a job at a US startup. Her insights were incredibly helpful!",
              },
              {
                name: "Liam T.",
                text: "The resume rewrite and LinkedIn tips brought in more recruiters in one week than months before.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <p className="text-lg italic mb-4">“{t.text}”</p>
                <p className="font-bold text-blue-700">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-lg mb-6">
            Whether you're hiring globally or seeking career growth, I’d love to support you.
          </p>
          <a
            href="mailto:fidaniummm@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-xl text-lg font-semibold hover:bg-gray-100 transition"
          >
            <FaEnvelope /> Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-600 text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://www.linkedin.com/in/fidanh/"
            target="_blank"
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
