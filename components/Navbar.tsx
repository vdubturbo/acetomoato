import Image from "next/image";

const isDev = process.env.NODE_ENV === "development";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f3]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#">
          <Image
            src="/title.png"
            alt="TheAceTomato.Company"
            width={200}
            height={40}
            className="h-5 w-auto"
          />
        </a>
        <div className="flex gap-6">
          <a
            href="#about"
            className="text-[#e25a21] hover:text-[#c74d1a] transition-colors font-medium"
          >
            About Ace Tomato
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#e25a21] transition-colors"
          >
            Contact Us
          </a>
          {isDev && (
            <a
              href="/admin"
              className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Admin
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
