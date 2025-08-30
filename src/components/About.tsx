import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Globe, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Healthcare First",
      description:
        "We believe healthcare is a fundamental human right and invest in solutions that make quality care accessible to all.",
    },
    {
      icon: Target,
      title: "Impact Focus",
      description:
        "Every investment decision is guided by the potential to create lasting positive impact in underserved communities.",
    },
    {
      icon: Globe,
      title: "Emerging Markets",
      description:
        "We specialize in understanding and navigating the unique challenges and opportunities in emerging markets.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description:
        "We work closely with founders, providing not just capital but strategic guidance and network access.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-white via-[#f3e8ff] to-[#e0f2fe] overflow-hidden">
      {/* Animated Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
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
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent text-reveal">
              in10nsity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that healthcare innovation can transform lives,
            we're a venture capital firm dedicated to backing entrepreneurs who
            are building the future of healthcare in Rwanda and across emerging
            markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`text-center p-6 hover-lift hover-glow transition-all duration-500 border-border/50 fade-in-up stagger-${(index % 4) + 1}`}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto fade-in-up stagger-3">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 hover-lift">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              To accelerate healthcare innovation in emerging markets by
              providing strategic capital, deep sector expertise, and unwavering
              support to entrepreneurs who are solving the world's most pressing
              healthcare challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="hover-lift">
                <div className="text-3xl font-bold text-health-green mb-2">
                  $100M+
                </div>
                <p className="text-muted-foreground">Assets Under Management</p>
              </div>
              <div className="hover-lift">
                <div className="text-3xl font-bold text-health-green mb-2">
                  25+
                </div>
                <p className="text-muted-foreground">Portfolio Companies</p>
              </div>
              <div className="hover-lift">
                <div className="text-3xl font-bold text-health-green mb-2">
                  10+
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
