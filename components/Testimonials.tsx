import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-lightGray py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4">
          <span className="relative z-10">What Our Clients Say</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          Hear directly from our satisfied customers about their experience with Dumpster Pro Rentals.
        </p>

        {/* Google Reviews Badge */}
        <div className="mb-12 flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
          <img src="/images/google-reviews.png" alt="Google Reviews" className="h-6" /> {/* Placeholder for Google Reviews logo */}
          <span className="text-xl font-bold text-primary">4.8★</span>
          <span className="text-muted text-sm">from 300+ reviews</span>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < testimonial.rating ? '#E8650A' : 'none'}
                    stroke={i < testimonial.rating ? '#E8650A' : '#6B7280'}
                    className="text-accent"
                  />
                ))}
              </div>
              <p className="text-text italic mb-4 flex-1">"{testimonial.quote}"</p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
              <p className="text-muted text-sm">{testimonial.location} - {testimonial.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
