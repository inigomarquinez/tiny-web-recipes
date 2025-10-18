// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Tiny Web Recipes',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/inigomarquinez/tiny-web-recipes' }],
        tableOfContents: false,
        sidebar: [
            {
                label: 'HTML',
                autogenerate: { directory: 'html' },
                // items: [
                // 	// Each item here is one entry in the navigation menu.
                // 	{ label: 'Example Guide', slug: 'guides/example' },
                // ],
            },
            {
                label: 'CSS',
                autogenerate: { directory: 'css' },
            },
        ],
    }), react()],
});