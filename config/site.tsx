import { BookOpenText, HomeIcon } from 'lucide-react'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "MyAnimeHub",
  description:
    "Anime database and community for anime fans. Discover, share, and discuss anime. Built with Radix UI and Next.js 13.",
  mainNav: [
    {
      icon: <HomeIcon size={20} />,
      title: "Anime",
      href: "/",
      alternativePath: "/anime",
      disabled: false,
    },
    {
      icon: <BookOpenText size={20} />,
      title: "Manga",
      href: "/manga",
    },
  ],
  links: {
    twitter: "https://twitter.com/tiagogp_exe",
    github: "https://github.com/tiagogp-exe",
    docs: "https://ui.shadcn.com",
  },
}
