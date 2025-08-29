import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Heart } from "lucide-react";

const Portfolio = () => {
  const focusAreas = [
    {
      icon: Heart,
      title: "Digital Health",
      description: "Telemedicine, health apps, and digital therapeutics",
      companies: "8 investments"
    },
    {
      icon: Users,
      title: "Health Infrastructure", 
      description: "Healthcare facilities, medical equipment, and supply chain",
      companies: "6 investments"
    },
    {
      icon: TrendingUp,
      title: "Health Fintech",
      description: "Insurance tech, payment solutions, and financing platforms",
      companies: "4 investments"
    }
  ];

  const portfolioHighlights = [
    {
      name: "MedAccess Rwanda",
      sector: "Digital Health",
      description: "Connecting rural patients with urban specialists through telemedicine",
      stage: "Series A",
      impact: "150k+ patients served"
    },
    {
      name: "HealthFlow",
      sector: "Health Infrastructure",
      description: "Medical supply chain optimization for African healthcare systems",
      stage: "Seed",
      impact: "200+ hospitals connected"
    },
    {
      name: "InsureTech Africa",
      sector: "Health Fintech", 
      description: "Affordable health insurance products for emerging market populations",
      stage: "Series B",
      impact: "1M+ lives covered"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We invest across the healthcare value chain, from early-stage startups 
            to growth companies making measurable impact in emerging markets.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {focusAreas.map((area, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-medium transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-health-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-health-green/20 transition-colors">
                  <area.icon className="h-8 w-8 text-health-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {area.companies}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Highlights */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Portfolio Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((company, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 group cursor-pointer">
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
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
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
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
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
};

export default Portfolio;