export const tabs = ['QA', 'Dev'] as const;

export type Tab = (typeof tabs)[number];

export const environmentsList = [
    'Development',
    'Staging',
    'Production',
] as const;

export const reproducedInList = ['Dev', 'Live', 'RC'] as const;

export const siteOptions = [
    'WP',
    'YS Songs',
    'GT Songs',
    'WebTuna',
    'Guitar Chords',
    'Garage',
] as const;

export const browserOptions = [
    'All',
    'Chrome',
    'Safari',
    'Edge',
    'Firefox',
] as const;

export const platformOptions = [
    'All',
    'Mac',
    'iOS',
    'Android',
    'Windows',
] as const;
