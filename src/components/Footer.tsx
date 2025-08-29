import { Heart, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "mailto:careers@in10nsity.com" }
    ],
    resources: [
      { name: "Investment Criteria", href: "#contact" },
      { name: "Partner Resources", href: "#contact" },
      { name: "News & Insights", href: "#contact" },
      { name: "Contact", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@in10nsity.com", label: "Email" }
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              in10nsity
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Transforming healthcare in emerging markets through strategic investments 
              and deep sector expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-health-green transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-health-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-health-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-neutral-300">
              <p>Kigali, Rwanda</p>
              <p>hello@in10nsity.com</p>
              <p>+250 123 456 789</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="h-4 w-4 text-health-green" />
              <p className="text-neutral-300 text-sm">
                Made with love for healthcare innovation in Africa
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-neutral-400 hover:text-health-green transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <p className="text-neutral-400 text-sm">
                © {currentYear} in10nsity. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;