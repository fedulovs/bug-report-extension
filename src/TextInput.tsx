import React, { ChangeEvent } from 'react';

interface TextInputGroupProps {
    values: string[];
    onChange: (values: string[]) => void;
    placeholder: string;
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({
    values,
    onChange,
    placeholder,
}) => {
    const value = values[0] ?? '';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange([e.target.value]);
    };

    return (
        <input
            type='text'
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            style={{ marginBottom: 12, marginRight: 8 }}
        />
    );
};

export default TextInputGroup;
