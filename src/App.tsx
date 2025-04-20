import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';
import ReproRateRadioGroup from './ReproRateRadioGroup';
import TextInputGroup from './TextInput';
import './App.css';

const environmentsList = ['Development', 'Staging', 'Production'] as const;
const reproducedInList = ['Dev', 'Live', 'RC'] as const;

const App = () => {
    const [reproRate, setReproRate] = useState('4/4');
    const [environments, setEnvironments] = useState<
        (typeof environmentsList)[number][]
    >([]);
    const [reproducedIn, setReproducedIn] = useState<
        (typeof reproducedInList)[number][]
    >([]);
    const [build, setBuild] = useState<string[]>([]);

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = `
**Steps to reproduce:**

1.

**Observed result:**


**Expected result:**


**Repro rate:**
${reproRate}

**Devices used:**


**API:**
${environments.join(', ')}

**Reproduced in:**
${reproducedIn.join(', ')}

**Build used:**
${build[0] || ''}
`.trim();

        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        });
    };

    return (
        <div className='container'>
            <h2>Bug Report Generator</h2>

            <h3>Repro rate:</h3>
            <ReproRateRadioGroup value={reproRate} onChange={setReproRate} />

            <h3>Environments:</h3>
            <CheckboxGroup
                options={environmentsList}
                selected={environments}
                onChange={setEnvironments}
            />

            <h3>Reproduced in:</h3>
            <CheckboxGroup
                options={reproducedInList}
                selected={reproducedIn}
                onChange={setReproducedIn}
            />

            <h3>Build:</h3>
            <TextInputGroup
                values={build}
                onChange={setBuild}
                placeholder='Build name or number'
            />

            <button className='copy-button' onClick={handleCopy}>
                {copied ? '👍' : 'Copy'}
            </button>
        </div>
    );
};

export default App;
