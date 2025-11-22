import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdf9f3] to-[#c2a467] flex items-start px-8 pt-16 pb-16 lg:pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xs uppercase tracking-wider text-gray-600 mb-3 font-medium">
              Custom AI-integrated software that actually solves problems
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-[#e25a21]">Fresh Software,</span>
              <br />
              Delivered On Target.
            </h1>

            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto lg:mx-0">
              We help businesses grow by solving big challenges on modest budgets.
              Custom software delivered in weeks or months, not years.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#e25a21] text-white font-semibold rounded-full hover:bg-[#c74d1a] transition-colors duration-200"
              >
                Got a Challenge? Let&apos;s Talk!
              </a>
              <a
                href="#work"
                className="px-6 py-3 bg-white/60 border border-gray-300 text-gray-800 font-medium rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                See Our Work!
              </a>
            </div>

            <div className="flex justify-center lg:justify-start mt-[50px]">
              <Image
                src="/title.png"
                alt="TheAceTomato.Company"
                width={700}
                height={140}
                className="h-auto"
              />
            </div>
          </div>

          {/* Right side - Crate image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[65%] max-w-2xl">
              <Image
                src="/right.png"
                alt="Ace Tomato software delivery crate"
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
