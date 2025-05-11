/* eslint-disable react/prop-types */
import { FaFootballBall, FaBasketballBall, FaTableTennis, FaSwimmer } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { MdSportsRugby } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sportIcons = {
  Football: FaFootballBall,
  Basketball: FaBasketballBall,
  Cricket: GiCricketBat,
  Tennis: FaTableTennis,
  Rugby: MdSportsRugby,
  Swimming: FaSwimmer,
};

const ServiceCard = ({ service }) => {
  const IconComponent = sportIcons[service.name] || FaFootballBall;

  return (
    <motion.article
      className="relative max-w-[400px] mx-auto bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-lg shadow-sm shadow-gray-700 overflow-hidden p-6 transform transition-transform hover:scale-105 duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 flex items-center justify-center">
            <IconComponent className="h-10 w-10 text-white" />
          </div>
          <h2 className="ml-4 text-lg font-bold md:text-xl lg:text-2xl text-white">
            {service.name}
          </h2>
        </div>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4 h-24 overflow-hidden">
          {service.description}
        </p>
        <motion.div
          className="flex justify-between items-center mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400 text-xs md:text-sm lg:text-base">
            View All {service.name} Players
          </p>
          <Link to={`/players?category=${service.name}`}>
            <button className="text-white border border-solid border-blue-500 hover:bg-blue-500 hover:text-white font-bold px-4 py-2 rounded transition-colors duration-300">
              View All
            </button>
          </Link>
        </motion.div>
        <hr className="border-gray-600 mb-4" />
        <motion.div
          className="flex justify-between"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs md:text-sm lg:text-base font-bold">
              Overall Rating
            </span>
            <span className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-bold">
              {service.overall_rating || 'N/A'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs md:text-sm lg:text-base font-bold">
              Potential Rating
            </span>
            <span className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-bold">
              {service.potential_rating || 'N/A'}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;