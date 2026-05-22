import Link from 'next/link';
import { Check } from 'lucide-react';
import { PRICING_PLANS, PHONE_NUMBER } from '@/lib/constants';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4">
          <span className="relative z-10">Our Flexible Pricing</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          Find the perfect dumpster rental plan to fit your project and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg flex flex-col ${plan.popular ? 'border-4 border-accent' : 'border-2 border-primary'}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-accent mb-6">
                {plan.size === '10 Yard' && '$299'}
                {plan.size === '20 Yard' && '$399'}
                {plan.size === '30 Yard' && '$499'}
                <span className="text-base font-normal text-text"> / rental</span>
              </p>

              <ul className="text-text text-left space-y-3 mb-8 flex-1">
                <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> {plan.size} Dumpster</li>
                <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> {plan.rentalDays} Rental</li>
                <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> {plan.tonnage}</li>
                <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> Extra Day: {plan.extraDayFee}</li>
                <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> Extra Tonnage: {plan.extraTonFee}</li>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> {feature}</li>
                ))}
              </ul>

              <Link href="#quote-form" className="mt-auto bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors inline-block w-full">
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-muted text-center mt-12 text-lg">
          Need a custom quote? <a href={`tel:${PHONE_NUMBER}`} className="text-primary hover:underline font-semibold">Call us</a> or use the <Link href="#quote-form" className="text-primary hover:underline font-semibold">form below</Link>.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
