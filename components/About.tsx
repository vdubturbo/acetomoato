export default function About() {
  return (
    <section id="about" className="bg-[#87ceeb] pt-6 pb-20 px-8">
      {/* Divider Line */}
      <div className="max-w-4xl mx-auto mb-12">
        <hr className="border-t-2 border-gray-800" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-[#e25a21]">About Ace Tomato</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We build custom SaaS platforms that solve real business problems. Our focus is on delivering production-ready applications with modern technology stacks, clean architecture, and exceptional user experiences.
        </p>
        <p className="text-lg text-gray-700">
          From AI-powered tools to real-time data platforms, we bring ideas to life with code that scales.
        </p>
      </div>
    </section>
  );
}
