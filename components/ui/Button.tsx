import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = "px-8 py-3 rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "bg-gray-900 text-white hover:bg-gray-800 active:scale-95",
        secondary: "border-2 border-gray-300 text-gray-900 hover:border-gray-900 hover:bg-gray-50"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
