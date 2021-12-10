import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      /* options */
      dirs: ['src/coms'],
      dts: 'src/components.d.ts',
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        /\.vue\?mpType/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'pinia',

        {
          // '@vueuse/core': [
          //   // named imports
          //   'useStorage', // import { useStorage } from '@vueuse/core',
          //   // alias
          //   // ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Icons({
      // expiremental
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src/'),
      },
      {
        find: '@com',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@hook',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@api',
        replacement: resolve(__dirname, 'src/api'),
      },
      {
        find: '@bus',
        replacement: resolve(__dirname, 'src/business'),
      },
      {
        find: '@type',
        replacement: resolve(__dirname, 'src/types'),
      },
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/utils'),
      },
    ],
  },
  server: {
    proxy: {
      '/api/': 'https://s.ismart720.com',
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
})
