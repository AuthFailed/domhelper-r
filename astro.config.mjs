// @ts-check
import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://authfailed.github.io",
  base: "/domru-helper",
  integrations: [
    starlight({
      title: "Вика по Хелперу",
      favicon: "/favicon.ico",
      logo: {
        src: "./public/logo.png",
      },
      editLink: {
        baseUrl: "https://github.com/authfailed/domru-helper/edit/main/",
      },
      locales: {
        root: {
          label: "Russian",
          lang: "ru",
        },
      },
      sidebar: [
        { label: "🏠 Главная", link: "/" },
        { label: "👋 База", link: "/wiki" },
        {
          label: "Инструкции",
          items: [
            { slug: "wiki/instructions/setup" },
            { slug: "wiki/instructions/open-settings" },
          ],
        },
        {
          label: "Функции",
          items: [
            { slug: "wiki/functions/popup-window" },
            { slug: "wiki/functions/settings" },
          ],
        },
      ],
      plugins: [
        starlightImageZoom({
          showCaptions: true,
        }),
      ],
      social: {
        telegram: "https://t.me/nedomru",
        github: "https://github.com/authfailed/domru-helper",
      },
    }),
  ],
});
