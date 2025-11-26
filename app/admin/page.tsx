"use client";

import { useState } from "react";
import { notFound } from "next/navigation";

interface ProjectConfig {
  id: number;
  videoUrl: string;
}

const projectNames: Record<number, string> = {
  1: "FedFusion.ai",
  2: "Sector1.ai",
  3: "Splitout.ai",
  4: "Middleseat.app",
  5: "Automated Service Quote Generation",
};

// Initial config - edit this directly and save the file
const initialConfig: ProjectConfig[] = [
  { id: 1, videoUrl: "" },
  { id: 2, videoUrl: "" },
  { id: 3, videoUrl: "" },
  { id: 4, videoUrl: "" },
  { id: 5, videoUrl: "" },
];

export default function AdminPage() {
  // Only render in development
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  const [config, setConfig] = useState<ProjectConfig[]>(initialConfig);
  const [copied, setCopied] = useState(false);

  const handleVideoUrlChange = (id: number, videoUrl: string) => {
    setConfig(
      config.map((p) => (p.id === id ? { ...p, videoUrl } : p))
    );
  };

  const handleCopyConfig = () => {
    const jsonOutput = JSON.stringify({ projects: config }, null, 2);
    navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const jsonOutput = JSON.stringify({ projects: config }, null, 2);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Portfolio Admin
          </h1>
          <a
            href="/"
            className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
          >
            Return to Main
          </a>
        </div>
        <p className="text-gray-600 mb-8">
          Configure video URLs for portfolio projects. This page is only
          available in development mode.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {config.map((project) => (
            <div key={project.id} className="space-y-2">
              <label
                htmlFor={`video-${project.id}`}
                className="block text-sm font-medium text-gray-700"
              >
                {projectNames[project.id] || `Project ${project.id}`}
              </label>
              <input
                type="text"
                id={`video-${project.id}`}
                value={project.videoUrl}
                onChange={(e) =>
                  handleVideoUrlChange(project.id, e.target.value)
                }
                placeholder="Enter video URL (YouTube embed, Vimeo, or direct link)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e25a21] focus:border-transparent outline-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Generated Config
            </h2>
            <button
              onClick={handleCopyConfig}
              className="px-4 py-2 bg-[#e25a21] text-white font-semibold rounded-lg hover:bg-[#c74d1a] transition-colors"
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
            {jsonOutput}
          </pre>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Instructions:</strong>
          </p>
          <ol className="text-sm text-yellow-800 list-decimal list-inside mt-2 space-y-1">
            <li>Enter your video URLs above</li>
            <li>Click &quot;Copy to Clipboard&quot;</li>
            <li>
              Paste into{" "}
              <code className="bg-yellow-100 px-1 rounded">
                data/portfolio-config.json
              </code>
            </li>
            <li>Save the file and redeploy</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
