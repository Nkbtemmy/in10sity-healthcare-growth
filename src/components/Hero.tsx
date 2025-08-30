import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Heart, Globe } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left Blob */}
        <svg
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] animate-blob-slow"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGradient1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient1)"
            d="M421.5,324.5Q410,399,324.5,410Q239,421,181,370Q123,319,156.5,239.5Q190,160,270,156Q350,152,401,201Q452,250,421.5,324.5Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M421.5,324.5Q410,399,324.5,410Q239,421,181,370Q123,319,156.5,239.5Q190,160,270,156Q350,152,401,201Q452,250,421.5,324.5Z;
                M400,320Q390,400,320,420Q250,440,180,370Q110,300,150,220Q190,140,270,160Q350,180,400,220Q450,260,400,320Z;
                M421.5,324.5Q410,399,324.5,410Q239,421,181,370Q123,319,156.5,239.5Q190,160,270,156Q350,152,401,201Q452,250,421.5,324.5Z
              "
            />
          </path>
        </svg>
        {/* Bottom Right Blob */}
        <svg
          className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] animate-blob-fast"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGradient2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient2)"
            d="M421.5,324.5Q410,399,324.5,410Q239,421,181,370Q123,319,156.5,239.5Q190,160,270,156Q350,152,401,201Q452,250,421.5,324.5Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M421.5,324.5Q410,399,324.5,410Q239,421,181,370Q123,319,156.5,239.5Q190,160,270,156Q350,152,401,201Q452,250,421.5,324.5Z;
                M400,320Q390,400,320,420Q250,440,180,370Q110,300,150,220Q190,140,270,160Q350,180,400,220Q450,260,400,320Z;
                M421.5,324.5Q410,399,324.5,410Q239,421,181,370Q123,319,156.5,239.5Q190,160,270,156Q350,152,401,201Q452,250,421.5,324.5Z
              "
            />
          </path>
        </svg>
        {/* Overlay Gradient for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/60 opacity-80"></div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Healthcare innovation in emerging markets"
          className="w-full h-full object-cover opacity-10 parallax"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 fade-in-up hover-glow">
            <TrendingUp className="h-4 w-4 text-primary animate-pulse-slow" />
            <span className="text-sm font-medium text-primary">
              Transforming Healthcare in Emerging Markets
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight fade-in-up stagger-1">
            <span className="text-primary-foreground">Investing in</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent text-reveal">
              Healthcare Innovation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-2">
            We partner with visionary entrepreneurs building the future of healthcare 
            in Rwanda and across emerging markets, creating lasting impact through 
            strategic investments and deep sector expertise.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto fade-in-up stagger-3">
            <div className="text-center hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-health-green mr-2 animate-float" />
                <span className="text-3xl font-bold text-primary-foreground">50M+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Lives Impacted</p>
            </div>
            <div className="text-center hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-6 w-6 text-health-green mr-2 animate-float" style={{ animationDelay: '1s' }} />
                <span className="text-3xl font-bold text-primary-foreground">15+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Countries Reached</p>
            </div>
            <div className="text-center hover-lift">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-health-green mr-2 animate-float" style={{ animationDelay: '2s' }} />
                <span className="text-3xl font-bold text-primary-foreground">$100M+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Capital Deployed</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-4">
            <Button variant="hero" size="lg" className="group btn-magnetic hover-glow">
              View Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="lg" className="btn-magnetic">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;