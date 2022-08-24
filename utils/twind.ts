import { IS_BROWSER } from "$fresh/runtime.ts";
import { setup, Configuration } from "twind";
export * from "twind";

export const config: Configuration = {
  mode: "silent",
  theme: {
    extend: {
      fontFamily: {
        sans: `Roboto, sans-serif`
      },
    },
  },
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap')`
  }
};

if (IS_BROWSER) setup(config);
