import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mt-60 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_50%)]"></div>

      {/* Floating decorative shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-20 w-32 h-32 border border-blue-500/20 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
      />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-between items-start gap-12 pb-12 border-b border-gray-700/50"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={assets.logo}
              alt="logo"
              className="h-10 md:h-12 mb-6 brightness-0 invert"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Premium car rental service with a wide selection of luxury and
              everyday vehicles for all your driving needs.
            </motion.p>

            {/* Social Media Icons with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                assets.facebook_logo,
                assets.instagram_logo,
                assets.twitter_logo,
                assets.gmail_logo,
              ].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.2,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                >
                  <img
                    src={icon}
                    className="w-6 h-6 brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                    alt="social"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-between flex-1 gap-12"
          >
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h2>
              <ul className="space-y-3">
                {["Home", "Browse Cars", "List Your Car", "About Us"].map(
                  (link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                      >
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-xl font-bold text-white mb-6 relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </h2>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Terms of Service",
                  "Privacy Policy",
                  "Insurance",
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-xl font-bold text-white mb-6 relative">
                Contact
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
              </h2>
              <ul className="space-y-4">
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-300 text-lg flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Mrinal
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-300 text-lg flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <a
                    href="tel:9155674769"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 9155674769
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-300 text-lg flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <a
                    href="mailto:mrinalanandiem@gmail.com"
                    className="hover:text-purple-400 transition-colors duration-300 break-all"
                  >
                    mrinalanandiem@gmail.com
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative z-10 flex flex-col md:flex-row gap-4 items-center justify-between py-8 border-t border-gray-700/30"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-400 text-lg"
          >
            © {new Date().getFullYear()} Luxury Car Rentals. All rights
            reserved.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-6 text-gray-400"
          >
            {["Privacy", "Terms", "Cookies"].map((item, index) => (
              <React.Fragment key={item}>
                <motion.li whileHover={{ scale: 1.05 }}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 text-lg"
                  >
                    {item}
                  </a>
                </motion.li>
                {index < 2 && <li className="text-gray-600">|</li>}
              </React.Fragment>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </motion.div>
  );
};

export default Footer;
