import { motion } from 'framer-motion';

import Button from '../Components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize z-10 lg:max-w-lg">
          We Provide You{' '}
          <span className="text-coral-red inline-block mt-3"> Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{' '}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-white-400">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white-400">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <motion.img
          whileHover={{ scale: [null, 1.1, 1.05] }}
          transition={{ duration: 0.9 }}
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
