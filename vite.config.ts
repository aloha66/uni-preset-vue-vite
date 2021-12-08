import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      /* options */
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      /* options */
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
})
