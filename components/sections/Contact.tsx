'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { getContent } from '@/data/content';

interface ContactProps {
    content: ReturnType<typeof getContent>;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
    const { contact } = content;
    const [formData, setFormData] = useState({
        businessName: '',
        contactName: '',
        phone: '',
        interests: {
            controlshift: false,
            instasite: false,
            reviewnet: false,
        }
    });

    const handleCheckboxChange = (key: string, checked: boolean) => {
        setFormData({
            ...formData,
            interests: {
                ...formData.interests,
                [key]: checked
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: Add actual form submission logic
        alert('Thank you! We will be in touch soon.');
    };

    return (
        <section id="contact" className="py-24 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    {contact.headline}
                </h2>
                <p className="text-lg text-gray-600 mb-12 text-center">
                    {contact.subheadline}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-lg shadow-md">
                    <Input
                        label={contact.fields.businessName.label}
                        placeholder={contact.fields.businessName.placeholder}
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        required
                    />

                    <Input
                        label={contact.fields.contactName.label}
                        placeholder={contact.fields.contactName.placeholder}
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        required
                    />

                    <Input
                        label={contact.fields.phone.label}
                        type="tel"
                        placeholder={contact.fields.phone.placeholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                            {contact.fields.interests.label}
                        </label>
                        <div className="space-y-3">
                            {contact.fields.interests.options.map((option) => (
                                <Checkbox
                                    key={option.value}
                                    id={option.value}
                                    label={option.label}
                                    checked={formData.interests[option.value as keyof typeof formData.interests]}
                                    onChange={(checked) => handleCheckboxChange(option.value, checked)}
                                />
                            ))}
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        {contact.submitButton}
                    </Button>
                </form>
            </div>
        </section>
    );
};
