import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Globe, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Healthcare First",
      description: "We believe healthcare is a fundamental human right and invest in solutions that make quality care accessible to all."
    },
    {
      icon: Target,
      title: "Impact Focus",
      description: "Every investment decision is guided by the potential to create lasting positive impact in underserved communities."
    },
    {
      icon: Globe,
      title: "Emerging Markets",
      description: "We specialize in understanding and navigating the unique challenges and opportunities in emerging markets."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work closely with founders, providing not just capital but strategic guidance and network access."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">in10nsity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that healthcare innovation can transform lives, 
            we're a venture capital firm dedicated to backing entrepreneurs who are 
            building the future of healthcare in Rwanda and across emerging markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-medium transition-all duration-300 border-border/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              To accelerate healthcare innovation in emerging markets by providing strategic capital, 
              deep sector expertise, and unwavering support to entrepreneurs who are solving the 
              world's most pressing healthcare challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-health-green mb-2">$100M+</div>
                <p className="text-muted-foreground">Assets Under Management</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-health-green mb-2">25+</div>
                <p className="text-muted-foreground">Portfolio Companies</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-health-green mb-2">10+</div>
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