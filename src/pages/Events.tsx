import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/sections/AnimatedSection";
import EventCard from "@/components/cards/EventCard";

const events = [
  {
    title: "Battle of Bands",
    date: "March 15, 2024 • 6:00 PM",
    location: "Main Amphitheatre",
    description: "Show off your musical talent! College bands compete for the ultimate glory and ₹50,000 prize.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
  },
  {
    title: "24-Hour Hackathon",
    date: "March 15-16, 2024",
    location: "Tech Hub Block A",
    description: "Build something amazing in 24 hours. Open to all skill levels with mentors from top tech companies.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
  },
  {
    title: "Street Dance Showdown",
    date: "March 16, 2024 • 4:00 PM",
    location: "Open Air Stage",
    description: "Crews from 30+ colleges battle it out in this high-energy dance competition. Prizes worth ₹75,000!",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=500&fit=crop",
  },
  {
    title: "Gaming Tournament",
    date: "March 16-17, 2024",
    location: "Gaming Arena",
    description: "Valorant, FIFA, and BGMI tournaments with a total prize pool of ₹1,00,000. Register your squad now!",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
  },
  {
    title: "EDM Night ft. DJ Nucleya",
    date: "March 16, 2024 • 9:00 PM",
    location: "Central Grounds",
    description: "The ultimate party experience! Dance the night away with India's top EDM artist.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop",
  },
  {
    title: "Basketball Championship",
    date: "March 17, 2024 • 10:00 AM",
    location: "Sports Complex",
    description: "Inter-college basketball finals. Cheer for your team as they compete for the championship title!",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=500&fit=crop",
  },
];

const Events = () => {
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">March 15-17, 2024</span>
            <h1 className="heading-xl mt-4 mb-6">
              Event
              <span className="text-gradient block">Schedule</span>
            </h1>
            <p className="body-lg max-w-2xl">
              Three days packed with competitions, performances, and unforgettable moments.
              Register for your favorite events before spots fill up!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {/* <section className="section-padding pt-0">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&h=600&fit=crop"
                alt="Featured Event"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                      🔥 Headliner Event
                    </span>
                    <h2 className="heading-md mb-4">EDM Night ft. DJ Nucleya</h2>
                    <p className="text-muted-foreground mb-6">
                      Experience the most epic night of CampusFest 2024! India's biggest EDM artist 
                      takes over the main stage for an unforgettable performance.
                    </p>
                    <Button variant="hero" size="lg">
                      Get Your Pass
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Events Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="heading-md">
              All <span className="text-gradient">Events</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="card-gradient border border-border rounded-3xl p-12 md:p-20 text-center">
              <h2 className="heading-lg mb-6">
                Get Event <span className="text-gradient">Updates</span>
              </h2>
              <p className="body-lg max-w-2xl mx-auto mb-10">
                Subscribe to receive schedule updates, artist announcements, and exclusive 
                early-bird registration links directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your college email"
                  className="flex-1 h-14 px-6 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="hero" size="xl">
                  Subscribe
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Events;