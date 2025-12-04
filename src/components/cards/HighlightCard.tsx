import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar } from "lucide-react";

interface HighlightCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  eventLink?: string;
  date?: string;
}

const HighlightCard = ({ title, category, image, index, eventLink, date }: HighlightCardProps) => {
  const CardContent = () => (
    <>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t  via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
            {category}
          </span>
          {eventLink && (
            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
              <ExternalLink className="w-3 h-3" />
              Register
            </span>
          )}
        </div>
        <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {date && (
          <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {eventLink ? (
        <Link to={eventLink} className="block">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
};

export default HighlightCard;