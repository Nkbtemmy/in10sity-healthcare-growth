import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import wistonImage from "@/assets/wiston.png";
import nkubito from "@/assets/nkubito.png";
import lydivine from "@/assets/lydivine.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. MUNANA Wiston May",
      role: "Founding Partner",
      bio: "Serial entrepreneur and investor. Built and sold two healthcare startups in Rwanda and Kenya.",
      image: wistonImage,
      linkedin: "#",
      twitter: "#",
      email: "wiston.munana@in10nsity.com",
    },
    {
      name: "Dr. Emmanuel NKUBITO",
      role: "Managing Partner",
      bio: "Former healthcare executive with 15+ years in emerging markets. Led digital health initiatives across East Africa.",
      image: nkubito,
      linkedin: "#",
      twitter: "#",
      email: "emmanuel.nkubito@in10nsity.com",
    },
    {
      name: "Dr. Marie Lydivine Uwase",
      role: "Investment Partner",
      bio: "Medical doctor turned venture capitalist. Specializes in health tech and pharmaceutical investments.",
      image: lydivine,
      linkedin: "#",
      twitter: "#",
      email: "marie.uwase@in10nsity.com",
    },
  ];

  // Inspired by the YouTube video, we'll use animated SVG blobs and gradients for a modern background
  return (
    <section id="team" className="relative py-24 bg-gradient-to-br from-[#e0f7fa] via-[#f3e8ff] to-[#e0f2fe] overflow-hidden">
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
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent text-reveal">
              Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse team of healthcare experts, entrepreneurs, and investors
            with deep experience in emerging markets and a passion for improving
            lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`text-center hover-lift hover-glow transition-all duration-500 group fade-in-up stagger-${
                (index % 3) + 1
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-health-green/20 group-hover:border-health-green/40 group-hover:scale-110 transition-all duration-300"
                  />
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-health-green font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto shadow-soft border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always looking for talented individuals who share our
              passion for healthcare innovation and emerging markets.
            </p>
            <a
              href="mailto:careers@in10nsity.com"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Open Positions →
            </a>
          </div>
        </div>
      </div>

      {/* Optional: Add these keyframes to your CSS for blob animation */}
      {/* 
      @keyframes blob-slow {
        0%, 100% { transform: scale(1) translate(0,0); }
        50% { transform: scale(1.1) translate(20px, 30px); }
      }
      @keyframes blob-fast {
        0%, 100% { transform: scale(1) translate(0,0); }
        50% { transform: scale(1.05) translate(-10px, -20px); }
      }
      .animate-blob-slow { animation: blob-slow 18s ease-in-out infinite; }
      .animate-blob-fast { animation: blob-fast 12s ease-in-out infinite; }
      */}
    </section>
  );
};

export default Team;
