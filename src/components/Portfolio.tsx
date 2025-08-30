"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    icon: Heart,
    title: "Digital Health",
    description: "Telemedicine, health apps, and digital therapeutics",
    companies: "8 investments",
  },
  {
    icon: Users,
    title: "Health Infrastructure",
    description: "Healthcare facilities, medical equipment, and supply chain",
    companies: "6 investments",
  },
  {
    icon: TrendingUp,
    title: "Health Fintech",
    description: "Insurance tech, payment solutions, and financing platforms",
    companies: "4 investments",
  },
];

const portfolioHighlights = [
  {
    name: "MedAccess Rwanda",
    sector: "Digital Health",
    description:
      "Connecting rural patients with urban specialists through telemedicine",
    stage: "Series A",
    impact: "150k+ patients served",
  },
  {
    name: "HealthFlow",
    sector: "Health Infrastructure",
    description:
      "Medical supply chain optimization for African healthcare systems",
    stage: "Seed",
    impact: "200+ hospitals connected",
  },
  {
    name: "InsureTech Africa",
    sector: "Health Fintech",
    description:
      "Affordable health insurance products for emerging market populations",
    stage: "Series B",
    impact: "1M+ lives covered",
  },
];

// Some reusable abstract SVG shapes for background
const svgShapes = [
  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1.5" fill="none" />,
  <rect
    x="20"
    y="20"
    width="60"
    height="60"
    stroke="white"
    strokeWidth="1.5"
    fill="none"
    rx="12"
  />,
  <polygon
    points="50,15 90,85 10,85"
    stroke="white"
    strokeWidth="1.5"
    fill="none"
  />,
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-background overflow-hidden">
      {/* Floating 3D SVG background */}
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
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.svg
            key={i}
            width="150"
            height="150"
            viewBox="0 0 100 100"
            className="absolute"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              opacity: 0.06,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25 + i * 7,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {svgShapes[i % svgShapes.length]}
          </motion.svg>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent text-reveal">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We invest across the healthcare value chain, from early-stage
            startups to growth companies making measurable impact in emerging
            markets.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                className={`text-center p-6 hover-lift hover-glow transition-all duration-500 group fade-in-up stagger-${
                  (index % 3) + 1
                }`}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-health-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-health-green/20 group-hover:scale-110 transition-all duration-300">
                    <area.icon className="h-8 w-8 text-health-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {area.companies}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Highlights */}
        <div className="max-w-5xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold text-center mb-12 fade-in-up">
            Portfolio Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card
                  className={`hover-lift hover-glow transition-all duration-500 group cursor-pointer fade-in-up stagger-${
                    (index % 3) + 1
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {company.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {company.sector}
                        </Badge>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {company.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-health-green">
                        {company.stage}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {company.impact}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 relative z-10">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in learning more about our investments?
          </p>
          <a
            href="#contact"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
}
