import React from 'react';

const fractions = ['1/4', '2/4', '3/4', '4/4'];

const ReproRateRadioGroup = ({ value, onChange }) => {
    return (
        <div>
            {fractions.map((option) => (
                <label key={option} style={{ marginRight: 12 }}>
                    <input
                        type='radio'
                        name='fraction'
                        value={option}
                        checked={value === option}
                        onChange={() => onChange(option)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default ReproRateRadioGroup;
