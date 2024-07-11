import type { LIGHT_MODE, DARK_MODE, AUTO_MODE } from "@constants/constants"

export type SiteConfig = {
  /**
   * The title of the site
   */
  title: string

  /**
   * The subtitle of the site
   */
  subtitle: string

  /**
   * The language of the site
   * e.g. `en`, `zh_CN`, `zh_TW`, `ja`
   */
  lang: string

  /**
   * The theme color of the site
   */
  themeColor: {
    /**
     * Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
     */
    hue: number
    /**
     * Hide the theme color picker for visitors
     */
    fixed: boolean
  }

  /**
   * The banner of the site
   */
  banner: {
    /**
     * Enable the banner
     */ 
    enable: boolean
    /**
     * The path of the banner image  
     * Relative to the /src directory. Relative to the /public directory if it starts with '/'
     */
    src: string
    /**
     * The position of the banner image  
     * Equivalent to object-position, defaults center
     */
    position?: string
  }

  /**
   * The favicon of the site
   */
  favicon: Favicon[]
}

export type Favicon = {
  src: string
  theme?: 'light' | 'dark'
  sizes?: string
}

/**
 * The link presets for the navigation bar
 */
export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
}

/**
 * A link in the navigation bar
 */
export type NavBarLink = {
  name: string
  /** 
   * Internal links should not include the base path, as it is automatically added
  */
  url: string
  /**
   * Show an external link icon and will open in a new tab
   */
  external?: boolean
}

/**
 * The configuration of the navigation bar
 */
export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  /**
   * Relative to the /src directory. Relative to the /public directory if it starts with '/'
   */
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    /**
     * Visit https://icones.js.org/ for icon codes
     */
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}

export type LIGHT_DARK_MODE = typeof LIGHT_MODE | typeof DARK_MODE | typeof AUTO_MODE
