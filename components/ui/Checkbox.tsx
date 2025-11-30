import React from 'react';

interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
    return (
        <div className="flex items-center gap-3">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="w-5 h-5 border-2 border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer"
            />
            <label
                htmlFor={id}
                className="text-sm font-medium text-gray-700 cursor-pointer select-none"
            >
                {label}
            </label>
        </div>
    );
};
