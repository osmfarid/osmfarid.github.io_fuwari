/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

import type { Swup } from '@swup/astro/client'

declare global {
  interface Window {
    swup: Swup
  }
}
