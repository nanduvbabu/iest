import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Heart, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/sections/AnimatedSection";

const values = [
  {
    icon: Target,
    title: "Student-Led",
    description: "Organized entirely by students, for students. Your fest, your rules, your memories.",
  },
  {
    icon: Heart,
    title: "Inclusive",
    description: "Everyone's welcome! We celebrate diversity and bring together talents from all backgrounds.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "From tech hackathons to creative workshops, we push boundaries and inspire change.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections that last beyond college. Make friends from 30+ institutions.",
  },
];

const team = [
  { name: "Rahul Sharma", role: "Fest Coordinator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Priya Patel", role: "Cultural Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Arjun Menon", role: "Tech Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Sneha Gupta", role: "PR & Marketing", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h1 className="heading-xl mt-4 mb-6">
              More Than Just
              <span className="text-gradient block">A College Fest</span>
            </h1>
            <p className="body-lg max-w-2xl">
              CampusFest started in 2015 as a small cultural evening. Today, it's one of 
              India's largest inter-college festivals, attracting 10,000+ participants 
              from 30+ colleges every year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
                    alt="Students celebrating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Story</span>
              <h2 className="heading-md mt-4 mb-6">9 Years of Epic Memories</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What began as a small gathering of music enthusiasts has transformed into 
                  a three-day extravaganza that students mark on their calendars months in advance.
                </p>
                <p>
                  Every year, we bring together the best talents—from underground rappers to 
                  championship-winning sports teams, from coding wizards to creative artists. 
                  CampusFest is where legends are made and friendships are forged.
                </p>
                <p>
                  Our alumni have gone on to start companies, release albums, and make their 
                  mark in the world. This isn't just a fest—it's a launchpad for dreams.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Stand For</span>
            <h2 className="heading-lg mt-4">
              The <span className="text-gradient">CampusFest</span> Spirit
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Core Team</span>
            <h2 className="heading-lg mt-4 mb-6">
              Meet the <span className="text-gradient">Organizers</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              The passionate students working behind the scenes to make CampusFest 2024 unforgettable.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t  to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="card-gradient border border-border rounded-3xl p-12 md:p-20 text-center">
              <h2 className="heading-lg mb-6">
                Want to Join the <span className="text-gradient">Team</span>?
              </h2>
              <p className="body-lg max-w-2xl mx-auto mb-10">
                We're always looking for enthusiastic volunteers! Be part of the organizing 
                committee and gain amazing experience while having fun.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Apply as Volunteer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default About;