import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Heart, Globe } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
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