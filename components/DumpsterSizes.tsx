import Image from 'next/image';
import Link from 'next/link';
import { DUMPSTER_SIZES } from '@/lib/constants';
import { Package } from 'lucide-react';

const DumpsterSizes = () => {
  return (
    <section id="dumpster-sizes" className="bg-darkBg py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Dumpster Sizes</h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          Choose the perfect size for your project, from small cleanouts to major construction debris.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DUMPSTER_SIZES.map((dumpster, index) => (
            <div
              key={index}
              className={`bg-darkBg-light relative p-6 rounded-lg shadow-lg border-2 ${dumpster.badge === 'Recommended' ? 'border-accent' : 'border-primary'} flex flex-col h-full`}
            >
              {dumpster.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                  {dumpster.badge}
                </span>
              )}
              <div className="mb-4">
                {/* Placeholder for dumpster illustration/icon */}
                {/* Replace with actual images later */}
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <Package size={48} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{dumpster.size}</h3>
              <p className="text-muted mb-2">
                <span className="font-semibold">Dimensions:</span> {dumpster.dimensions}
              </p>
              <p className="text-muted mb-2">
                <span className="font-semibold">Weight Limit:</span> {dumpster.weightLimit}
              </p>
              <p className="text-white mb-4 flex-1">{dumpster.useCase}</p>
              <div className="mt-auto">
                <p className="text-3xl font-bold text-accent mb-4">Starting at {dumpster.price}</p>
                <Link href="#quote-form" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors inline-block w-full">
                  Book This Size
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DumpsterSizes;
