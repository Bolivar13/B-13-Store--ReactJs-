import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { motion } from 'framer-motion';

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <motion.img
          whileHover={{ scale: [null, 1.1, 1.05] }}
          transition={{ duration: 0.9 }}
          className="object-contain w-full"
          src={offer}
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize z-10 lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3"> Special</span>{' '}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-white-400">
          Embark on a shopping journey that redefines your experience with
          unbeatable deal. From premier selections to increadible with
          unbeatable deals. From premier selections to increadible savings, we
          offer unparalleled value taht sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white-400">
          Nabigate a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
