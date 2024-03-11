import { useState } from 'react';

import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
// import { storeImg } from '../assets/images';
import { storeImg } from '../assets/images/';
import ShoeCard from '../Components/ShoeCard';
import { color, motion } from 'framer-motion';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(storeImg);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center gap-10 min-h-screen max-container "
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-lg:-z-0">
          {/* <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p> */}
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading-[82px] font-bold capitalize z-10">
            <span className="xl:whitespace-nowrap z-10 pr-10">
              the New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3" > B-13 </span> Store
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-white-400">
            Discover stylish B-13 arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now" iconUrl={arrowRight} />
          <div className="flex justify-start items-center w-full gap-6 mt-20">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray dark:text-white-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center dark:dark-image">
          <motion.img
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.7 }}
            className="object-contain relative"
            src={bigShoeImg}
            alt="store img"
            width={610}
            height={500}
            
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <ShoeCard
                key={shoe}
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
