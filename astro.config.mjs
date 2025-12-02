// astro.config.mjs
import { defineConfig } from 'astro/config';

// 1. 引入 Solid 集成
import solid from '@astrojs/solid-js';

// 2. 引入 Tailwind v4 的 Vite 插件
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 配置 Vite 插件 (Tailwind v4 的新用法)
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // 配置 Astro 集成 (Solid)
  integrations: [
    solid(),
  ],
});