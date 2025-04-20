import React from 'react';

interface CheckboxGroupProps<T extends string> {
    options: readonly T[];
    selected: T[];
    onChange: (selected: T[]) => void;
}

const CheckboxGroup = <T extends string>({
    options,
    selected,
    onChange,
}: CheckboxGroupProps<T>) => (
    <div>
        {options.map((option) => (
            <label key={option} style={{ marginRight: 12 }}>
                <input
                    type='checkbox'
                    checked={selected.includes(option)}
                    onChange={() =>
                        onChange(
                            selected.includes(option)
                                ? selected.filter((item) => item !== option)
                                : [...selected, option]
                        )
                    }
                />
                {option}
            </label>
        ))}
    </div>
);

export default CheckboxGroup;
