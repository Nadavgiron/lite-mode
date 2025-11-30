import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={inputId}
                className="text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                id={inputId}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                {...props}
            />
        </div>
    );
};
