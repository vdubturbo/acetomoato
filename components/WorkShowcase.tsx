import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technicalFeatures: string[];
  businessFeatures: string[];
  imageUrl: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Splitout (ScottGPT)",
    description: "An interactive AI-powered resume platform that answers questions about your professional experience in real-time",
    technicalFeatures: [
      "RAG-based document retrieval with vector embeddings",
      "Automated resume/document ingestion pipeline with extraction and indexing",
      "Intelligent skill and tag management system with approval workflows",
      "Token-optimized model switching for cost efficiency",
      "PDF and DOCX export generation"
    ],
    businessFeatures: [
      "Transforms static resumes into interactive experiences",
      "Reduces recruiter screening time with instant Q&A",
      "Demonstrates technical competency through the product itself",
      "Scales personal branding beyond traditional documents"
    ],
    imageUrl: "https://placehold.co/800x450/e25a21/ffffff?text=Splitout",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "OpenAI", "Cohere", "RAG"]
  },
  {
    id: 2,
    title: "Sector1 (TrackTime)",
    description: "Professional motorsports live timing and telemetry platform with real-time race monitoring and data persistence",
    technicalFeatures: [
      "Real-time data synchronization at 5Hz with sub-200ms latency",
      "RedMist timing system integration via SignalR WebSocket",
      "D3.js-powered track visualization with live car positioning",
      "Bull Queue system with Redis for reliable data persistence",
      "Multi-event support with UUID mapping architecture"
    ],
    businessFeatures: [
      "Provides professional-grade timing for racing series and teams",
      "Enables broadcast graphics integration for live streaming",
      "Reduces manual timing operations with automated data capture",
      "Supports race strategy decisions with historical lap analysis"
    ],
    imageUrl: "https://placehold.co/800x450/c2a467/ffffff?text=Sector1",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Supabase", "Redis", "SignalR", "WebSocket"]
  },
  {
    id: 3,
    title: "FedFusion",
    description: "AI-powered government contractor marketplace connecting buyers with verified vendors through intelligent RFP response generation",
    technicalFeatures: [
      "RAG-based RFP response generation with vector embeddings (pgvector)",
      "Multi-stage AI pipeline: Analysis → Gap Analysis → Content Generation → Compliance",
      "SAM.gov and USASpending.gov API integration for contractor verification",
      "Enhanced prompt engineering system with A/B testing framework",
      "Real-time collaboration via Stream Chat integration"
    ],
    businessFeatures: [
      "Reduces RFP response time from weeks to hours",
      "Improves proposal win rates through AI-optimized content",
      "Streamlines contractor discovery with verified government data",
      "Enables small businesses to compete with larger contractors"
    ],
    imageUrl: "https://placehold.co/800x450/e25a21/ffffff?text=FedFusion",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "pgvector", "Cohere", "TailwindCSS", "Stream Chat"]
  },
  {
    id: 4,
    title: "Middleseat",
    description: "Smart travel optimization platform that finds the optimal meeting location by analyzing flight prices across multiple origin cities",
    technicalFeatures: [
      "AI-powered natural language destination matching with multi-factor scoring",
      "16-category flight system with coordinated arrival time optimization",
      "Real-time price analysis across 47 US cities (2,100+ routes)",
      "Automated data refresh pipeline with API rate management",
      "AI-generated weekend itineraries with venue and weather integration"
    ],
    businessFeatures: [
      "Reduces group travel planning time by 80%",
      "Optimizes total travel costs across multiple travelers",
      "Simplifies complex multi-city coordination decisions",
      "Improves travel experience through AI-curated recommendations"
    ],
    imageUrl: "https://placehold.co/800x450/c2a467/ffffff?text=Middleseat",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "OpenAI", "Chart.js", "Recharts", "TailwindCSS"]
  },
  {
    id: 5,
    title: "Peerless",
    description: "AI-assisted quote generation system that combines customer requirements with product catalog data to produce professional proposals",
    technicalFeatures: [
      "AI-powered quote generation with product catalog integration",
      "Dynamic pricing rules with urgency-based adjustments",
      "PDF document parsing for requirement extraction",
      "Automated quote history and record-keeping",
      "Role-based pricing multipliers (standard, expedited, rush)"
    ],
    businessFeatures: [
      "Reduces quote generation time from hours to minutes",
      "Ensures pricing consistency with rule-based calculations",
      "Improves customer response time for sales teams",
      "Maintains audit trail of all quote requests and outcomes"
    ],
    imageUrl: "https://placehold.co/800x450/e25a21/ffffff?text=Peerless",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "OpenAI GPT-4", "TailwindCSS", "React 19"]
  }
];

export default function WorkShowcase() {
  return (
    <section id="work" className="bg-gradient-to-b from-[#c2a467] via-[#a8d5e2] via-30% to-[#87ceeb] pt-6 pb-20 px-8">
      {/* Divider Line */}
      <div className="max-w-4xl mx-auto mb-12">
        <hr className="border-t-2 border-gray-800" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center items-center text-center md:text-left">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold shrink-0 leading-none">
            <span className="text-[#e25a21]">Our Work</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-md">
            Explore our portfolio of custom SaaS platforms, each designed to solve unique business challenges with cutting-edge technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className="space-y-6">
                {/* Title, Description, and Tech Stack - Full Width */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
                    {project.description}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/80 border border-gray-300 rounded-full text-sm font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Two Column Layout - Video and Features */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Image/Video Placeholder */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-white/60 backdrop-blur-sm border border-gray-200">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {/* Video Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 cursor-pointer group">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <svg
                            className="w-8 h-8 text-[#e25a21] ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {/* Technical Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e25a21] mb-3">
                        Technical Features
                      </h4>
                      <ul className="space-y-2">
                        {project.technicalFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-[#e25a21] mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Features */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e25a21] mb-3">
                        Business Impact
                      </h4>
                      <ul className="space-y-2">
                        {project.businessFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-[#e25a21] mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
