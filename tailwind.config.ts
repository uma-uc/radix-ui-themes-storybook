import { incmixTailwindPreset } from "@incmix/tw-config"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../frontend/**/components/**/*.{ts,tsx}",
  ],
  presets: [incmixTailwindPreset],
}

export default config
