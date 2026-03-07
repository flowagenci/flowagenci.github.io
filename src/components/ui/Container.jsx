import React from 'react';

export function Container({ children, className = '' }) {
    return (
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 ${className}`}>
            {children}
        </div>
    );
}
