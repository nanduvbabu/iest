import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Mic2, Palette, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/3d/FloatingShapes";
import AnimatedSection from "@/components/sections/AnimatedSection";
import FeatureCard from "@/components/cards/FeatureCard";

const features = [
  {
    icon: Music,
    title: "Live Concerts",
    description: "Experience electrifying performances from top artists and student bands on our main stage.",
  },
  {
    icon: Mic2,
    title: "Battle of Bands",
    description: "Watch college bands compete for glory in the most anticipated musical showdown of the year.",
  },
  {
    icon: Palette,
    title: "Art & Design",
    description: "Showcase your creativity in art exhibitions, design competitions, and creative workshops.",
  },
  {
    icon: Trophy,
    title: "Sports Events",
    description: "Compete in various sports tournaments and prove your athletic prowess against rival colleges.",
  },
];

const stats = [
  { value: "50+", label: "Events" },
  { value: "10K+", label: "Participants" },
  { value: "30+", label: "Colleges" },
  { value: "3", label: "Epic Days" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-6 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
                🎉 27,28 FEB & MAR 2026 • Main Campus
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-6"
            >
             TANTRA' 26
              <span className="text-gradient block">2024</span>
            </motion.h1>

              <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="body-lg max-w-2xl mx-auto mb-3"
            >
              Proud To Present 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="body-lg max-w-2xl mx-auto mb-10"
            >
              The Ultimate Technical Odyssey
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/events">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/highlights">View Events</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">What's Happening</span>
            <h2 className="heading-lg mt-4 mb-6">
              Experience <span className="text-gradient">TANTRA'26</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              From headlining concerts to intense competitions, there's something for everyone.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
              <div className="relative card-gradient border border-border rounded-3xl p-12 md:p-20 text-center">
                <h2 className="heading-lg mb-12">
                  Ready to Be Part of <span className="text-gradient">Competition</span>?
                </h2>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/events">
                    Register Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;