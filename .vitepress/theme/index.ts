// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
import PostTitle from '../components/PostTitle.vue';
import { useData } from 'vitepress';
import './style.css';
import './custom.css';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => {
                return h(PostTitle);
            },
        });
    },
    enhanceApp({ app, router, siteData }) {
        // ...
    },
} satisfies Theme;

