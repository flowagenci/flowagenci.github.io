import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
    primary: 'bg-brand-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-transparent',
    secondary: 'bg-transparent border border-white/20 hover:border-white text-white',
};

export function Button({ children, variant = 'primary', className, ...props }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }} // Subtle hover scale
            whileTap={{ scale: 0.98 }}   // Active state tactile feedback
            className={clsx(
                'px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide uppercase',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
