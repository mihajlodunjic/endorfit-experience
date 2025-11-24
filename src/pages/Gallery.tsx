import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import gym1 from "@/assets/gym-1.png";
import gym2 from "@/assets/gym-2.png";

const Gallery = () => {
  // For demo purposes, we'll use the two images we have and repeat them
  // In a real scenario, you'd have more unique images
  const images = [
    { src: gym1, alt: "LED osvetljena prostorija sa ogledalom", span: "md:col-span-2" },
    { src: gym2, alt: "Glavni trening prostor sa opremom", span: "md:col-span-1" },
    { src: gym1, alt: "Detalj prostora sa squat rack-om", span: "md:col-span-1" },
    { src: gym2, alt: "Funkcionalna zona", span: "md:col-span-2" },
    { src: gym1, alt: "Ogledalo i LED svetlo", span: "md:col-span-1" },
    { src: gym2, alt: "Sprave i oprema", span: "md:col-span-1" },
    { src: gym1, alt: "Minimalistički dizajn prostora", span: "md:col-span-2" },
    { src: gym2, alt: "Prostor za individualni trening", span: "md:col-span-2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero
        image={gym1}
        title="GALERIJA"
        subtitle="Pogledajte naš premium prostor"
        height="large"
      />

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Naš prostor dizajniran je da inspiriše. Svaki detalj - od LED svetlosnih 
              akcentata do crnog poda i modernih mašina - osmišljen je da kreira idealnu 
              atmosferu za ozbiljan trening.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative group overflow-hidden rounded-lg ${image.span}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-foreground font-medium">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-border group-hover:ring-primary/50 transition-colors rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8">
                Što <span className="text-primary">vidite</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    LED svetlosni akcenti
                  </h3>
                  <p className="text-muted-foreground">
                    Zlatno osvetljenje oko ogledala koje kreira dramatičan, premium ambijent 
                    i daje prostoru jedinstvenu atmosferu.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Crni pod
                  </h3>
                  <p className="text-muted-foreground">
                    Izdržljiv, kvalitetan crni pod koji daje prostoru eleganciju i ujedno 
                    štiti sprave i opremu.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Ogledala
                  </h3>
                  <p className="text-muted-foreground">
                    Velika ogledala koja omogućavaju proveravanje tehnike, vizuelno 
                    proširuju prostor i dodaju profesionalni osećaj.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Moderna oprema
                  </h3>
                  <p className="text-muted-foreground">
                    Najsavremenija fitnes oprema - od slobodnih tegova do funkcionalnih 
                    sprava za sveobuhvatan trening.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Čist dizajn
                  </h3>
                  <p className="text-muted-foreground">
                    Minimalistički pristup sa belo-sivom paletom, bez vizuelnog haosa, 
                    što omogućava fokus na trening.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Detalji
                  </h3>
                  <p className="text-muted-foreground">
                    Zelene biljke, natpisi na zidu, pažljivo raspoređena oprema - 
                    svaki detalj doprinosi celokupnoj atmosferi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
