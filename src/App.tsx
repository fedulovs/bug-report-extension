import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';
import ReproRateRadioGroup from './ReproRateRadioGroup';
import TextInputGroup from './TextInput';
import './App.css';
import CopyButton from './CopyButton';
import {
    tabs,
    Tab,
    environmentsList,
    reproducedInList,
    siteOptions,
    browserOptions,
    platformOptions,
} from './constants';

const QAContent = () => {
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

const DevContent = () => {
    const [selectedSites, setSelectedSites] = useState<
        (typeof siteOptions)[number][]
    >([]);
    const [selectedBrowsers, setSelectedBrowsers] = useState<
        (typeof browserOptions)[number][]
    >([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState<
        (typeof platformOptions)[number][]
    >([]);

    const devTemplate = `
**For QA**
**Branch:**
**Site:** ${
        selectedSites.length > 0 ? selectedSites.join(' | ') : '(none selected)'
    }
**Browsers:** ${
        selectedBrowsers.length > 0
            ? selectedBrowsers.join(' | ')
            : '(none selected)'
    }
**Platforms:** ${
        selectedPlatforms.length > 0
            ? selectedPlatforms.join(' | ')
            : '(none selected)'
    }
**URL:** Any specific?
Instructions, screenshots, videos
`.trim();

    return (
        <div className='container'>
            <h2>QA Instructions</h2>
            <h3>Site:</h3>
            <CheckboxGroup
                options={siteOptions}
                selected={selectedSites}
                onChange={setSelectedSites}
            />

            <h3>Browsers:</h3>
            <CheckboxGroup
                options={browserOptions}
                selected={selectedBrowsers}
                onChange={setSelectedBrowsers}
            />

            <h3>Platforms:</h3>
            <CheckboxGroup
                options={platformOptions}
                selected={selectedPlatforms}
                onChange={setSelectedPlatforms}
            />

            <CopyButton template={devTemplate} className='copy-button' />
        </div>
    );
};

const App = () => {
    const [activeTab, setActiveTab] = useState<Tab>('QA');

    return (
        <div>
            <div className='tabbar'>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn${
                            activeTab === tab ? ' active' : ''
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {activeTab === 'QA' && <QAContent />}
            {activeTab === 'Dev' && <DevContent />}
        </div>
    );
};

export default App;
