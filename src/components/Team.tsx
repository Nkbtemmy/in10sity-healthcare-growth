import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Uwimana",
      role: "Founding Partner",
      bio: "Former healthcare executive with 15+ years in emerging markets. Led digital health initiatives across East Africa.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@in10nsity.com"
    },
    {
      name: "James Mukamana",
      role: "Managing Partner",
      bio: "Serial entrepreneur and investor. Built and sold two healthcare startups in Rwanda and Kenya.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#", 
      email: "james@in10nsity.com"
    },
    {
      name: "Dr. Aisha Nkurunziza",
      role: "Investment Partner",
      bio: "Medical doctor turned venture capitalist. Specializes in health tech and pharmaceutical investments.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "aisha@in10nsity.com"
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse team of healthcare experts, entrepreneurs, and investors 
            with deep experience in emerging markets and a passion for improving lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-health-green/20 group-hover:border-health-green/40 transition-colors"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-health-green font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
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
              We're always looking for talented individuals who share our passion 
              for healthcare innovation and emerging markets.
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