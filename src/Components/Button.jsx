import { motion } from 'framer-motion';

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className={`flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none rounded-full border hover:bg-red-500 hover:text-white transition ease-out duration-500
    ${
      backgroundColor
        ? ` ${backgroundColor} ${borderColor} ${textColor}`
        : 'bg-coral-red text-white border-coral-red'
    } ${fullWidth && 'w-full'}
    `}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="" className="ml-2 w-5 h-5 rounded-full" />
      )}
    </motion.button>
  );
};

export default Button;
