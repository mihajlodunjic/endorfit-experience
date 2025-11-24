import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import gym1 from "@/assets/gym-1.png";
import { Dumbbell, Target, TrendingUp, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personalni trening",
      description: "Individualno vođeni treninzi sa profesionalnim trenerom koji prati svaki vaš pokret, ispravlja tehniku i motiviše vas da dostignete maksimum. Svaka sesija je prilagođena vašem trenutnom nivou, ciljevima i mogućnostima.",
      features: [
        "1-na-1 rad sa trenerom",
        "Prilagođeni treninzi",
        "Praćenje napretka",
        "Korekcija tehnike",
      ],
    },
    {
      icon: Target,
      title: "Program oblikovanja",
      description: "Fokus na definiciju tela, gubitak masnog tkiva i oblikovanje siluete. Program kombinuje treninge otpora sa kardio aktivnostima i precizan plan ishrane za optimalne rezultate u toning-u i definiciji mišića.",
      features: [
        "Plan ishrane uključen",
        "Kardio i strength balans",
        "Fokus na definiciju",
        "Praćenje telesne kompozicije",
      ],
    },
    {
      icon: TrendingUp,
      title: "Program snage",
      description: "Za one koji žele da grade snagu i mišićnu masu. Program je zasnovan na progresivnom opterećenju, složenim pokretima i optimizaciji oporavka. Idealno za napredne trenere ili one koji žele da podignu performanse na viši nivo.",
      features: [
        "Fokus na složene vežbe",
        "Progresivno opterećenje",
        "Plan regeneracije",
        "Suplementacija savetovanje",
      ],
    },
    {
      icon: MessageSquare,
      title: "Konsultacije i savetovanje",
      description: "Individualne konsultacije sa trenerima o ishrani, suplementaciji, životnom stilu i načinu postizanja vaših ciljeva. Idealno za one koji žele da dobiju stručno mišljenje pre nego što počnu sa treninzima ili kao dodatna podrška postojećem programu.",
      features: [
        "Analiza trenutnog stanja",
        "Plan ishrane i suplementacije",
        "Saveti za lifestyle",
        "Praćenje i podrška",
      ],
    },
  ];

  return (
    <>
      
      <Hero
        image={gym1}
        title="USLUGE"
        subtitle="Prilagođeni programi za sve nivoe i ciljeve"
        height="large"
      />

      {/* Services Grid */}
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
              U Endorfit Gym-u nudimo isključivo personalni pristup. Svaki program je kreiran 
              specifično za vas - vaše ciljeve, trenutni nivo, mogućnosti i vremenski okvir. 
              Bez šablona, bez grupnih treninga, bez kompromisa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">
                Naš <span className="text-primary">pristup</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
                <p>
                  Svaki program počinje sa detaljnom analizom vašeg trenutnog stanja - 
                  fizičke forme, zdravstvenog stanja, prethodnog iskustva sa treningom i, 
                  naravno, vaših ciljeva.
                </p>
                <p>
                  Na osnovu toga kreiramo individualni plan koji uključuje:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Treninzi:</strong> Prilagođen broj sesija nedeljno, odabir vežbi, setovi, ponavljanja, intenzitet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Ishrana:</strong> Plan obroka koji odgovara vašem načinu života i ciljevima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Regeneracija:</strong> Saveti za oporavak, spavanje, suplementaciju</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Praćenje:</strong> Redovna merenja, analiza napretka, prilagođavanje programa</span>
                  </li>
                </ul>
                <p>
                  Tokom celog procesa trener je tu da vas vodi, motiviše, ispravlja i podržava. 
                  Vaš uspeh je naš uspeh, i radimo zajedno da ga ostvarite.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
