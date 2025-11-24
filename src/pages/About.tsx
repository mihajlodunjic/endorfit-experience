import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import gym2 from "@/assets/gym-2.png";
import gym1 from "@/assets/gym-1.png";
import { Heart, Shield, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Posvećenost",
      description: "Vaš uspeh je naš uspeh. Posvećeni smo vašem napretku i ciljevima.",
    },
    {
      icon: Shield,
      title: "Privatnost",
      description: "Miran, intiman prostor bez gužve gde možete da se fokusirate na sebe.",
    },
    {
      icon: Award,
      title: "Kvalitet",
      description: "Vrhunska oprema, profesionalni treneri, održavanje na najvišem nivou.",
    },
    {
      icon: Clock,
      title: "Fleksibilnost",
      description: "Prilagođeni termini i programi koji odgovaraju vašem životnom ritmu.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero
        image={gym2}
        title="O NAMA"
        subtitle="Vaš personalni fitnes centar na Zvezdari"
        height="large"
      />

      {/* Main Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8">
                Više od <span className="text-primary">teretane</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Endorfit Gym nije obična teretana. To je personalni fitnes centar kreiran 
                  sa jasnom vizijom - pružiti prostor gde se vrhunski rezultati postižu kroz 
                  individualnu pažnju, profesionalni pristup i kvalitetan ambijent.
                </p>
                <p>
                  Naš studio na Zvezdari dizajniran je da bude odmak od prenatrpanih teretana. 
                  Ovde nemate gužvu, haosu ni neprijatan osećaj neugodnosti. Umesto toga, 
                  imate prostor koji vas motiviše - sa čistim linijama, LED svetlosnim akcentima, 
                  ogledalom koje pokriva celu površinu, i atmosferom koja vas tera da se fokusirate 
                  na ono što je važno: vaš napredak.
                </p>
                <p>
                  Svaki detalj - od crnog poda do moderne opreme, od zelenih biljaka do 
                  pažljivo odabranog osvetljenja - osmišljen je da kreira idealno okruženje 
                  za personalni trening i ozbiljan rad.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 relative"
            >
              <img
                src={gym1}
                alt="Endorfit Gym prostor"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-primary/20" />
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8">
                Naša <span className="text-primary">filozofija</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Verujemo da fitness nije samo fizička transformacija - to je put ka 
                  boljem, zdravijem i samouverenije verziji sebe. I taj put zaslužuje pravi pristup.
                </p>
                <p>
                  Zato nudimo isključivo personalne treninge i prilagođene programe. 
                  Nema šablona, nema grupnih časova u kojima se gubite u masi. Svaki klijent 
                  dobija individualno vođenje, program kreiran za njegove ciljeve, i punu pažnju trenera.
                </p>
                <p>
                  Naš pristup je holistički - ne fokusiramo se samo na vežbe, već i na 
                  ishranu, regeneraciju, motivaciju i mentalni pristup. Jer pravi rezultati 
                  se postižu kada sve to radi zajedno.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Naše <span className="text-primary">vrednosti</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principi koji vode sve što radimo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Space */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8">
                Oprema i <span className="text-primary">prostor</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Naš studio opremljen je najsavremenijom fitnes opremom. Od squat rack-a 
                  i slobodnih tegova do funkcionalnih mašina i kardio opreme - sve što vam 
                  treba za sveobuhvatan trening na jednom mestu.
                </p>
                <p>
                  Posebnu pažnju posvećujemo održavanju i čistoći. Crni pod, ogledala 
                  sa LED osvetljenjem, bele i sive površine - sve je dizajnirano da bude 
                  vizuelno impresivno i da vas motiviše svakog dana.
                </p>
                <p>
                  Prostor je dovoljno prostran za udoban trening, ali dovoljno intiman 
                  da se osećate kao da je samo vaš. Nema prenatrpanosti, nema čekanja 
                  na sprave, nema uznemiravanja.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
