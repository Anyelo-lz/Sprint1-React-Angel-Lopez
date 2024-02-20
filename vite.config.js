import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["@swc/wasm-web/wasm-web_bg.wasm"]
})
