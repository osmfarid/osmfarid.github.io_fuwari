import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: "Farid's Blog",
  subtitle: 'My Angular developers notebook',
  lang: 'en',
  themeColor: {
    hue: 250,
    fixed: true,
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
    position: 'center',
  },
  favicon: [
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar2.jpg',
  name: 'Farid Osmanli',
  bio: 'Angular developer, tech enthusiast',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/osmfarid',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/osmfarid',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/osmfarid',
    },
    {
      name: 'Mail',
      icon: 'fa6-solid:envelope',
      url: 'mailto:osmfarid@gmail.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const goatCounterConfig = {
  id: 'osmfarid-blog',
}
