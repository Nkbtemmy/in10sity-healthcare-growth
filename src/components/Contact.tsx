import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office",
      details: ["Kigali, Rwanda", "Kigali Heights, 4th Floor"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@in10nsity.com", "partnerships@in10nsity.com"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+250 123 456 789", "+250 987 654 321"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get in</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform healthcare in emerging markets? We'd love to hear from you. 
            Whether you're an entrepreneur, investor, or partner, let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're always excited to meet visionary entrepreneurs and explore 
                partnership opportunities. Reach out to discuss your healthcare innovation.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-health-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-health-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
              <h4 className="font-semibold mb-2">Investment Criteria</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Healthcare-focused startups</li>
                <li>• Operating in emerging markets</li>
                <li>• Seed to Series A stage</li>
                <li>• $500K - $5M investment range</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="border-border/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    className="border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    className="border-border/50"
                  />
                </div>

                <Button variant="primary" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;