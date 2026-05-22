import { Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, SERVICE_HOURS, DUMPSTER_SIZES, SERVICES_LIST } from '@/lib/constants';

const QuoteForm = () => {
  return (
    <section id="quote-form" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4 text-center">
          <span className="relative z-10">Get Your Free Quote Today</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto text-center">
          Fill out the form below or contact us directly for a quick and accurate estimate.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Quote Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-border">
            <h3 className="text-2xl font-semibold text-primary mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-text mb-1">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select a Service</option>
                  {SERVICES_LIST.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="dumpsterSize" className="block text-sm font-medium text-text mb-1">Dumpster Size</label>
                <select
                  id="dumpsterSize"
                  name="dumpsterSize"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select a Size</option>
                  {DUMPSTER_SIZES.map((size, index) => (
                    <option key={index} value={size.size}>{size.size} - {size.price}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="deliveryAddress" className="block text-sm font-medium text-text mb-1">Delivery Address</label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="123 Main St, Anytown, CA 90210"
                  required
                />
              </div>
              <div>
                <label htmlFor="rentalStartDate" className="block text-sm font-medium text-text mb-1">Rental Start Date</label>
                <input
                  type="date"
                  id="rentalStartDate"
                  name="rentalStartDate"
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors text-lg"
              >
                Request My Free Quote
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info + Map + WhatsApp */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-border">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted">Call Us</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-text text-lg font-semibold hover:text-accent transition-colors">{PHONE_NUMBER}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted">Email Us</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-text text-lg font-semibold hover:text-accent transition-colors">{EMAIL_ADDRESS}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted">Service Hours</p>
                    <p className="text-text text-lg font-semibold">{SERVICE_HOURS}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-lightGray w-full aspect-video rounded-lg overflow-hidden border-2 border-border flex items-center justify-center text-muted text-lg">
              Map Placeholder
            </div>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890" // Replace with actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors text-lg space-x-2"
            >
              <MessageSquare size={24} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
