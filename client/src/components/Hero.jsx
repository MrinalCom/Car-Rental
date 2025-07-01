import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } =
    useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      "/cars?pickupLocation=" +
        pickupLocation +
        "&pickupDate=" +
        pickupDate +
        "&returnDate=" +
        returnDate
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative text-center perspective-1000"
      >
        {/* Explosive background effect */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-conic from-blue-500 via-purple-500 via-pink-500 via-yellow-400 to-blue-500 opacity-20 blur-2xl -z-10 rounded-full scale-150"
        />

        {/* Main LUXURY text with 3D effect */}
        <motion.h1
          initial={{
            scale: 0,
            rotateX: -90,
            filter: "blur(10px)",
          }}
          animate={{
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "backOut",
            type: "spring",
            bounce: 0.4,
          }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-none tracking-tight transform-gpu"
          style={{
            textShadow: `
        0 0 20px rgba(255, 215, 0, 0.5),
        0 0 40px rgba(255, 20, 147, 0.3),
        0 0 60px rgba(255, 105, 180, 0.2)
      `,
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
          }}
        >
          LUXURY
        </motion.h1>

        {/* Bouncing subtitle */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            bounce: 0.6,
          }}
          className="relative -mt-6 md:-mt-8"
        >
          <motion.h2
            animate={{
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.7)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-wider uppercase"
          >
            Cars on Rent
          </motion.h2>
        </motion.div>

        {/* Explosive underline animation */}
        <motion.div
          initial={{ scaleX: 0, height: 2 }}
          animate={{ scaleX: 1, height: 6 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: "easeOut",
          }}
          className="mx-auto mt-8 w-40 md:w-64 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full origin-center relative overflow-hidden"
        >
          {/* Sliding highlight effect */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </motion.div>

        {/* Exploding particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i * 45 * Math.PI) / 180) * 200,
              y: Math.sin((i * 45 * Math.PI) / 180) * 200,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.8 + i * 0.1,
              ease: "easeOut",
            }}
            className={`absolute w-4 h-4 rounded-full ${
              i % 3 === 0
                ? "bg-yellow-400"
                : i % 3 === 1
                ? "bg-pink-500"
                : "bg-blue-500"
            } blur-sm`}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Floating orbs with different animations */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-16 -left-12 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 shadow-lg"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-8 -right-16 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70 shadow-xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/4 -right-20 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
        />

        {/* Pulsating glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-pink-500/30 to-blue-500/30 blur-3xl -z-20 rounded-full"
        />
      </motion.div>

      <motion.form
        initial={{ scale: 0.95, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please select location"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              className="text-sm text-gray-500"
              required
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
        >
          <img
            src={assets.search_icon}
            alt="search"
            className="brightness-300"
          />
          Search
        </motion.button>
      </motion.form>

      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        src={
          "https://www.pngkey.com/png/full/184-1846171_car-side-view-convertible-png-audi.png"
        }
        alt="car"
        className="max-h-80 "
      />
    </motion.div>
  );
};

export default Hero;
