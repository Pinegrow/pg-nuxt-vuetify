// import { fileURLToPath, URL } from 'node:url'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  // ssr: false,
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt Vuetify - Quick start template',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Store`, link: '/store' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    // '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    '@nuxtjs/html-validator',
    '@nuxt/image',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), vuetify-nuxt-module uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      vuetify: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'vuetify.config.ts', // or file where vuetify is created
        // themePath: false, // Set to false so that Design Panel is not used
        // utilities: false,
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },

  // Vuetify's global styles
  css: [
    '~/assets/css/main.css', // Used for global styles.
    '~/assets/vuetify/main.scss', // If customizing Vuetify sass variables
    'lite-youtube-embed/src/lite-yt-embed.css',
  ],

  // Vuetify Nuxt module, thanks Joaquín (userquin)
  vuetify: {
    moduleOptions: {
      /* If customizing sass variables of vuetify components */
      // styles: {
      //   configFile: 'assets/vuetify/settings.scss',
      // },
      includeTransformAssetsUrls: true,
      ssrClientHints: {
        reloadOnFirstRequest: false,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
        viewportSize: true,
      },
      //...
    },

    vuetifyOptions: './vuetify.config.ts', // This file is generally configured as configPath with Pinegrow Vuetify Plugin
  },

  // Required when customizing Vuetify sass variables via configFile with SSR enabled - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-sass-variables
  // experimental: {
  //   inlineSSRStyles: false,
  // },

  image: {
    domains: ['images.unsplash.com', 'fakestoreapi.com'],
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
      '2xl': 3840,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 80,
          height: 80,
        },
      },
      // product: {
      //   modifiers: {
      //     format: 'jpg',
      //     // width: 50,
      //     height: 256,
      //   },
      // },
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },
})
