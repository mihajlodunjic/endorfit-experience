import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import gym2 from "@/assets/gym-2.png";
import { Award, Target, Heart } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      name: "Marko Petrović",
      title: "Glavni trener / Osnivač",
      bio: "Sa preko 10 godina iskustva u personalnom treningu, Marko je specijalizovan za programe snage i hipertrofije. Certificiran NSCA-CPT trener sa fokusom na powerlifting i bodybuilding metode. Radi sa klijentima svih nivoa, od početnika do naprednih sportista.",
      specialties: ["Snaga i masa", "Powerlifting", "Tehnička korekcija"],
    },
    {
      name: "Ana Jovanović",
      title: "Personalni trener",
      bio: "Ana je stručnjak za funkcionalni trening i oblikovanje tela. Sa diplomom iz kinezologije i brojnim certifikatima iz treninga, ishrane i rehabilitacije, pomaže klijentima da postignu estetske ciljeve uz optimalno zdravlje.",
      specialties: ["Body recomposition", "Funkcionalni trening", "Ishrana"],
    },
    {
      name: "Stefan Nikolić",
      title: "Trener za performanse",
      bio: "Stefan kombinuje znanje iz sportske nauke sa praktičnim iskustvom kao bivši profesionalni sportista. Specijalizovan je za atletske performanse, eksplozivnu snagu i sportsko-specifičan trening.",
      specialties: ["Atletske performanse", "Eksplozivna snaga", "Mobility"],
    },
  ];

  const certifications = [
    { icon: Award, text: "NSCA Certified Personal Trainers" },
    { icon: Target, text: "Specijalizacija u snazi i kondiciji" },
    { icon: Heart, text: "Iskustvo u radu sa različitim populacijama" },
  ];

  return (
    <>
      
      <Hero
        image={gym2}
        title="TRENERI"
        subtitle="Upoznajte naš profesionalni tim"
        height="large"
      />

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Naš tim čine sertifikovani treneri sa godinama iskustva, kontinuiranim 
              usavršavanjem i, što je najvažnije, strašću za onim što rade. Svaki trener 
              donosi jedinstvenu ekspertizu i pristup, ali svi delimo istu misiju - 
              pomoći vam da postignete svoje ciljeve.
            </p>
          </motion.div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium">{cert.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Trainers */}
          <div className="space-y-16">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-card border border-border rounded-lg aspect-[4/5] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">
                          {trainer.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                      <p className="text-primary font-medium">{trainer.title}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-bold mb-3">{trainer.name}</h3>
                  <p className="text-primary font-medium mb-6">{trainer.title}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {trainer.bio}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold mb-3">Specijalizacije:</p>
                    {trainer.specialties.map((specialty) => (
                      <div key={specialty} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              <h2 className="text-4xl font-bold mb-6">
                Naša <span className="text-primary">filozofija</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Verujemo da je odnos između trenera i klijenta ključan za uspeh. 
                  Zato ne gledamo na vas samo kao na "još jednog klijenta" - vi ste partner 
                  u procesu, i zajedno radimo na vašim ciljevima.
                </p>
                <p>
                  Naš pristup je zasnovan na nauci, ali i na razumevanju da je svaka osoba 
                  jedinstvena. Nema univerzalnih rešenja - ima samo individualno prilagođenih 
                  programa koji vode do rezultata.
                </p>
                <p>
                  Osim toga, ne verujemo u kratkoročne fikseve. Naš cilj je da vas naučimo, 
                  opremimo znanjem i pomognemo da izgradite trajne navike koje će vas pratiti 
                  celog života.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;
