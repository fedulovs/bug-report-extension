import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                'popup.html': 'src/popup.html', // <-- fixed key name!
                background: 'src/background.js',
                contentScript: 'src/contentScript.js',
            },
            output: {
                entryFileNames: (assetInfo) => {
                    if (assetInfo.name === 'background')
                        return 'assets/background.js';
                    if (assetInfo.name === 'contentScript')
                        return 'assets/contentScript.js';
                    return 'assets/[name].js';
                },
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
            },
        },
    },
});
