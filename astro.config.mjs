import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blogs.ssfrg.com', // 你的最终域名
  // 开启 View Transitions
  experimental: {
    viewTransitions: true,
  },
});
