// src/components/Partners.tsx
import { motion } from "framer-motion";
import React from "react";

interface Partner {
  name: string;
  logo: string;
  website: string;
}

const partners: Partner[] = [
  {
    name: "World Health Organization",
    logo: "https://imgs.search.brave.com/I-A4qVMpCeTTbKtnQyyuBn2TYzOaCQgdnDOa_QSSa8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzQw/LzJiLzYzNDAyYmMz/MWMwOTc2ZmQzYWIw/ZGNiM2NkMWQ0Y2U4/LmpwZw",
    website: "https://www.who.int/",
  },
  {
    name: "Bill & Melinda Gates Foundation",
    logo: "https://imgs.search.brave.com/rTkdEkC7JnBkC3bzCaqQZdfGh44hJqEozyPBM9ok-mo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2Np/YWxpbXBhY3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA0L3BuZy10cmFu/c3BhcmVudC1iaWxs/LW1lbGluZGEtZ2F0/ZXMtZm91bmRhdGlv/bi1naXZpbmctdHVl/c2RheS1vcmdhbml6/YXRpb24tZG9uYXRp/b24tYmlsbC1nYXRl/LWNvbXBhbnktdGV4/dC1sb2dvLXRodW1i/bmFpbC0zMDB4MzAw/LnBuZw",
    website: "https://www.gatesfoundation.org/",
  },
  {
    name: "Rwanda Ministry of Health",
    logo: "https://www.moh.gov.rw/index.php?eID=dumpFile&t=f&f=1679&token=c456432515e20118795fbbd0cce379ac2bcd0a14",
    website: "https://www.moh.gov.rw/",
  },
  {
    name: "African Development Bank",
    logo: "https://imgs.search.brave.com/RbGYesiBD9hGFpCqOBeOZmSw18TYi7JWnXFBt1wAm4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUwLzEvYWZyaWNh/bi1kZXZlbG9wbWVu/dC1mdW5kLWxvZ28t/cG5nX3NlZWtsb2dv/LTUwODk4MS5wbmc",
    website: "https://www.afdb.org/",
  },
];

export default function Partners(): JSX.Element {
    return (
        <section className="relative py-20 bg-white" id="partners">
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

        </svg>
        {/* Overlay Gradient for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/60 opacity-80"></div>
      </div>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <header className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our <span className="text-blue-600">Partners</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We collaborate with leading organizations to drive innovation and
                        strengthen healthcare systems in emerging markets.
                    </p>
                </header>

                {/* Partner logos and names */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 items-center">
                    {partners.map((partner) => (
                        <motion.a
                            key={partner.name}
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${partner.name}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="h-16 md:h-20 object-contain transition"
                                loading="lazy"
                            />
                            <span className="mt-4 text-center text-sm text-gray-700 font-medium">
                                {partner.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
