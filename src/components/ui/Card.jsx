import React from 'react';
import { motion } from 'framer-motion';

export function Card({ children, className = '' }) {
    return (
        <motion.div
            whileHover={{ y: -6 }} // Elevation effect requirements: -6px
            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
            className={`p-8 rounded-xl bg-gradient-to-br from-brand-clay/30 to-brand-clay/10 border border-white/5 hover:border-white/20 hover:from-brand-clay/40 hover:to-brand-clay/20 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm ${className}`}
        >
            {children}
        </motion.div>
    );
}
