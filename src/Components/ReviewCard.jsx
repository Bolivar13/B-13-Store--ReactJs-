import { star } from '../assets/icons';
import { motion } from 'framer-motion';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.7 }}
      className="flex justify-center items-center flex-col shadow max-lg:mb-7"
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text dark:text-white-400">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-containm-0" />
        <p className="text-xl font-montserrat text-slate-gray dark:text-white-400">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </motion.div>
  );
};

export default ReviewCard;
