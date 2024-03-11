import { motion } from 'framer-motion';

import { star } from '../assets/icons';

const ProductCard = ({ imgURL, name, rating, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <motion.img
        whileHover={{ scale: [null, 1.1, 1.05] }}
        transition={{ duration: 0.7 }}
        className="w-[280px] h-[280px]"
        src={imgURL}
        alt={name}
      />

      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-white-400">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
