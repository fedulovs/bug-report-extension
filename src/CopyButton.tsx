import React, { useState } from 'react';

interface CopyButtonProps {
    template: string;
    className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ template, className }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(template).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        });
    };

    return (
        <button className={className} onClick={handleCopy}>
            {copied ? '👍' : 'Copy'}
        </button>
    );
};

export default CopyButton;
