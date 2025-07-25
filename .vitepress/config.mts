import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'るもみ Docs',
    description: 'A VitePress Site',
    lang: 'ja',
    cleanUrls: true,
    srcDir: 'docs',
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { href: 'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap', rel: 'stylesheet' }],
        ['link', { href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1+Code&display=swap', rel: 'stylesheet' }],
    ],
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '規約・ガイドライン', link: '/' },
            { text: '変更履歴', link: 'https://github.com/momizi06/rumomi_docs' },
        ],

        sidebar: [
            {
                text: '規約・ガイドライン',
                items: [
                    { text: '規約・ガイドラインTop', link: '/' },
                    { text: '利用規約', link: '/tos' },
                    { text: 'プライバシーポリシー', link: '/privacy-policy' },
                    { text: '利用に関するガイドライン', link: '/guideline' },                    
                ],
            },
        ],

        outline: {
            label: '目次',
        },
        lastUpdated: {
            text: '最終更新',
            formatOptions: {
                dateStyle: 'long',
            },
        },

        // socialLinks: [
        //     { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
    },
});

