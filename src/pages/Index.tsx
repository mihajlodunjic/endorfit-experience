import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import gym1 from "@/assets/gym-1.png";
import gym2 from "@/assets/gym-2.png";
import { Dumbbell, Users, Target, Sparkles } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium oprema",
      description: "Najsavremenija fitnes oprema za sve vrste treninga",
    },
    {
      icon: Users,
      title: "Personalni pristup",
      description: "Individualni programi prilagođeni vašim ciljevima",
    },
    {
      icon: Target,
      title: "Profesionalni treneri",
      description: "Iskusni stručnjaci posvećeni vašem napretku",
    },
    {
      icon: Sparkles,
      title: "Premium ambijent",
      description: "Moderan prostor sa pažljivim dizajnom i svetlosnim akcentima",
    },
  ];

  return (
    <>
      <Hero
        image={gym1}
        title="ENDORFIT GYM"
        subtitle="Fitnes centar na Zvezdari"
        height="full"
      />

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Vaš</span> prostor za transformaciju
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Endorfit Gym je više od obične teretane - to je personalni fitnes centar 
              gde se spajaju vrhunska oprema, profesionalno vođenje i prijatan ambijent. 
              Naš prostor na Zvezdari dizajniran je da vam pruži privatnost, fokus i motivaciju 
              koju zaslužujete.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Dizajniran za <span className="text-primary">vrhunske rezultate</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Svaki detalj našeg prostora osmišljen je da kreira idealnu atmosferu za trening. 
                Od LED svetlosnih akcentata do pažljivo odabranih mašina, crnog poda i ogledala 
                koja čine prostor vizuelno impresivnim - sve je tu da vas motiviše i fokusira.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ovo nije mesto gužve i haosa. Ovo je vaš miran, čist i profesionalan prostor 
                gde možete raditi na sebi bez ometanja.
              </p>
              <span
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-default"
              >
                Saznaj više
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={gym2}
                alt="Endorfit Gym prostor"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Naše <span className="text-primary">usluge</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prilagođeni programi za sve nivoe i ciljeve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Personalni trening",
                description: "Individualno vođeni treninzi sa profesionalnim trenerom",
              },
              {
                title: "Program oblikovanja",
                description: "Fokus na definiciju mišića i gubitak masnog tkiva",
              },
              {
                title: "Program snage",
                description: "Razvoj maksimalne snage i mišićne mase",
              },
              {
                title: "Savetovanje",
                description: "Konsultacije o ishrani, suplementaciji i načinu života",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <span
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors cursor-default"
            >
              Pogledaj sve usluge
            </span>
          </div>
        </div>
      </section>

      {/* Trainers Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Upoznaj <span className="text-primary">trenere</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Naš tim čine sertifikovani treneri sa godinama iskustva u radu sa klijentima različitih nivoa i ciljeva
            </p>
            <span
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-default"
            >
              Pogledaj naš tim
            </span>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Pogledaj <span className="text-primary">prostor</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Dođi i vidi kako izgleda naš studio uživo kroz našu galeriju
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img src={gym1} alt="Gym 1" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img src={gym2} alt="Gym 2" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <div className="text-center">
            <span
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors cursor-default"
            >
              Vidi celu galeriju
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
