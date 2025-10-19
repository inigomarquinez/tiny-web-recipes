// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://inigomarquinezprado.dev',
    base: '/tiny-web-recipes',
    integrations: [starlight({
        title: 'Tiny Web Recipes',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/inigomarquinez/tiny-web-recipes' }],
        tableOfContents: false,
        lastUpdated: true,
        sidebar: [
            {
                label: 'HTML',
                autogenerate: { directory: 'html' },
            },
            {
                label: 'CSS',
                autogenerate: { directory: 'css' },
            },
        ],
    }), react()],
});