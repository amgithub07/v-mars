import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import RubyPlugin from 'vite-plugin-ruby'
import inject from "@rollup/plugin-inject";
//import { fileURLToPath, URL } from "node:url";
import htmlPurge from 'vite-plugin-purgecss'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    inject({ 
      $: 'jquery',
      jQuery: 'jquery',
      "windows.jQuery":'jquery'
   }),
    vue(),
    htmlPurge()
  ],
  resolve: {
    alias: {
      //"@": fileURLToPath(new URL("./src", import.meta.url)),
      "@":path.resolve(__dirname,'./src')
    },
  },
  // optimizeDeps: {
  //   include: ['jquery']
  // },
  server: { host: "127.0.0.1", port: 3000 },
});