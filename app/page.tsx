import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-100 to-blue-300">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Fidan</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Helping businesses grow through smart solutions, clear communication, and global teamwork.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a business professional with experience in international collaboration, remote hiring, and supporting talent through career transitions. Passionate about building bridges across cultures and helping people succeed.
        </p>
      </section>

      {/* Services / Projects */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            <li className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Remote Team Building</h3>
              <p>Connecting skilled professionals with international job opportunities.</p>
            </li>
            <li className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Job Interview Coaching</h3>
              <p>Helping non-native speakers succeed in English-speaking interviews.</p>
            </li>
            <li className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Resume & LinkedIn Support</h3>
              <p>Providing tailored materials to boost confidence and visibility.</p>
            </li>
            <li className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Global Communication Training</h3>
              <p>Empowering teams to communicate more effectively across borders.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="mb-6">Interested in working together or learning more? Drop a message!</p>
          <a
            href="mailto:fidan@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} [Friend's Name]. All rights reserved.
      </footer>
    </main>
  );
}
