import { motion } from 'framer-motion';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className="flex-1 sm:2-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 text-center"
    >
      <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex mx-auto">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-white-400">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
