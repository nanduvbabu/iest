import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  index: number;
}

const EventCard = ({ title, date, location, description, image, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t  via-background/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            {date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            {location}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
          Register Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default EventCard;
