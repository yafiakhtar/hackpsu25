import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDDAFA] via-[#F2EAFD] to-[#F8E4FD] relative overflow-hidden">
      <Header />

      {/* Blur Effects */}
      <div className="absolute left-1/2 top-[177px] w-[767px] h-[438px] bg-[rgba(93,91,234,0.48)] blur-[20px] pointer-events-none transform -translate-x-1/2" />
      
      <svg
        className="absolute left-[120px] top-[659px] w-[342px] h-[184px] pointer-events-none"
        width="442"
        height="284"
        viewBox="0 0 442 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_61_75)">
          <ellipse cx="221" cy="142" rx="171" ry="92" fill="url(#paint0_linear_61_75)" />
        </g>
        <defs>
          <filter
            id="filter0_f_61_75"
            x="0"
            y="0"
            width="442"
            height="284"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_61_75" />
          </filter>
          <linearGradient
            id="paint0_linear_61_75"
            x1="50"
            y1="142"
            x2="392"
            y2="142"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D7D3FF" />
            <stop offset="1" stopColor="#F8E4FD" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute right-[149px] top-[649px] w-[490px] h-[184px] pointer-events-none"
        width="591"
        height="285"
        viewBox="0 0 591 285"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_61_76)">
          <ellipse
            cx="295.183"
            cy="142.154"
            rx="245.184"
            ry="92.1543"
            transform="rotate(-179.961 295.183 142.154)"
            fill="url(#paint0_linear_61_76)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_61_76"
            x="0"
            y="0"
            width="590.367"
            height="284.309"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_61_76" />
          </filter>
          <linearGradient
            id="paint0_linear_61_76"
            x1="49.9998"
            y1="142.154"
            x2="540.367"
            y2="142.154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D7D3FF" />
            <stop offset="1" stopColor="#F8E4FD" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content */}
      <main className="relative pt-[195px] pb-20 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          {/* Hero Image */}
          <video 
            className="w-full max-w-[693px] aspect-[231/130] rounded-[10px] overflow-hidden shadow-[0_0_60px_rgba(93,91,234,0.5)] mb-[100px] sm:mb-[100px]"
            autoPlay  
            muted 
            playsInline
          >
            <source src="/signlink_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Headline */}
          <div className="w-full max-w-[832px] flex flex-col items-center gap-3 mb-[59px] px-4">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-normal text-center md:whitespace-nowrap">
              <span className="text-[#3C57FF]">Real-time</span>
              <span className="text-black"> gesture-to-text translation for any video platform</span>
            </h1>
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-normal text-center">
              <span className="text-black">because </span>
              <span className="text-[#3C57FF]">communication</span>
              <span className="text-black"> should never have barriers.</span>
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-[189px] h-[50px] rounded-[30px] bg-[#5D5BEA] text-[#F9FAFB] text-[20px] sm:text-[24px] font-normal shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#4a49d1] transition-colors">
            Start now
          </button>
        </div>
      </main>
    </div>
  );
}
