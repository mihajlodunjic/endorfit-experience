import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import gym2 from "@/assets/gym-2.png";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const Location = () => {
  const info = [
    {
      icon: MapPin,
      title: "Adresa",
      content: "Olge Jovanović 2, Beograd",
      subtitle: "Zvezdara, 11000",
    },
    {
      icon: Clock,
      title: "Radno vreme",
      content: "Ponedeljak - Petak: 07:00 - 22:00",
      subtitle: "Subota: 09:00 - 20:00",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+381 60 123 4567",
      subtitle: "Pozovite za više informacija",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@endorfit_gym",
      subtitle: "Pratite nas za ažuriranja",
    },
  ];

  return (
    <>
      
      <Hero
        image={gym2}
        title="LOKACIJA"
        subtitle="Pođite nam u posetu"
        height="large"
      />

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Dođite <span className="text-primary">do nas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Naš studio se nalazi na Zvezdari, u mirnom delu grada sa lakim pristupom 
              i parking mogućnostima.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {info.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground font-medium mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.0666895277745!2d20.507934!3d44.803056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7066d5b8d1d3%3A0x4e8e4e8e4e8e4e8e!2sOlge%20Jovanovi%C4%87%202%2C%20Beograd!5e0!3m2!1sen!2srs!4v1234567890123!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center">
                Kako <span className="text-primary">do nas</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Endorfit Gym se nalazi na adresi <strong className="text-foreground">Olge Jovanović 2</strong>, 
                  u mirnom delu Zvezdare. Lokacija je lako dostupna kako automobilom tako i 
                  javnim prevozom.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Automobilom
                    </h3>
                    <p>
                      Dostupan parking u blizini, sa lakim pristupom glavnim saobraćajnicama. 
                      Iz centra grada do nas je 10-15 minuta vožnje.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Javnim prevozom
                    </h3>
                    <p>
                      Nekoliko autobuskih linija prolazi u blizini, sa stajalištem na 
                      svega par minuta hoda od studija.
                    </p>
                  </div>
                </div>
                <p>
                  Za sve dodatne informacije, pitanja ili zakazivanje prvog treninga, 
                  kontaktirajte nas putem telefona ili Instagram profila. Radujemo se 
                  što ćemo vas ugostiti u našem studiju!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
