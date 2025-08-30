import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr MUNANA Wiston May",
      role: "Founding Partner",
      bio: "Serial entrepreneur and investor. Built and sold two healthcare startups in Rwanda and Kenya.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFmY8JBQyTvvg/profile-displayphoto-crop_800_800/B4DZhW0nxbGsAI-/0/1753803292335?e=1759363200&v=beta&t=qpw50yQv6gTSEdtEnKCDwP-J6RnCFdE0dmUqosbovkk",
      linkedin: "#",
      twitter: "#",
      email: "james@in10nsity.com",
    },
    {
      name: "Dr. Emmanuel NKUBITO",
      role: "Managing Partner",
      bio: "Former healthcare executive with 15+ years in emerging markets. Led digital health initiatives across East Africa.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@in10nsity.com",
    },
    {
      name: "Dr. Aisha Nkurunziza",
      role: "Investment Partner",
      bio: "Medical doctor turned venture capitalist. Specializes in health tech and pharmaceutical investments.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "aisha@in10nsity.com",
    },
  ];

  return (
    <section id="team" className="relative py-24 bg-gradient-subtle overflow-hidden">
      {/* Graph Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full animate-pulse-slow"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="graphGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Moving Lines */}
          <g stroke="url(#graphGradient)" strokeWidth="1.5" strokeLinecap="round">
            <line x1="10%" y1="20%" x2="30%" y2="40%">
              <animate
                attributeName="x2"
                values="30%;35%;30%"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="40%;35%;40%"
                dur="5s"
                repeatCount="indefinite"
              />
            </line>
            <line x1="60%" y1="30%" x2="80%" y2="50%">
              <animate
                attributeName="x2"
                values="80%;75%;80%"
                dur="7s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="50%;55%;50%"
                dur="6s"
                repeatCount="indefinite"
              />
            </line>
            <line x1="40%" y1="70%" x2="70%" y2="85%">
              <animate
                attributeName="x2"
                values="70%;75%;70%"
                dur="8s"
                repeatCount="indefinite"
              />
            </line>
          </g>

          {/* Nodes */}
          <g fill="url(#graphGradient)">
            <circle cx="10%" cy="20%" r="4">
              <animate
                attributeName="r"
                values="4;6;4"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="30%" cy="40%" r="3">
              <animate
                attributeName="r"
                values="3;5;3"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="60%" cy="30%" r="4">
              <animate
                attributeName="r"
                values="4;7;4"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="80%" cy="50%" r="5">
              <animate
                attributeName="r"
                values="5;8;5"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
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
    </section>
  );
};

export default Team;
