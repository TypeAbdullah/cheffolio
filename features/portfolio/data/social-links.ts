import type { SocialLink } from '../types/social-links';
import { USER } from './user';

const baseUrl = 'https://res.cloudinary.com/chef0111/image/upload/v1';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: `${baseUrl}/x.webp`,
    title: 'X',
    subtitle: '@becauseunknown',
    href: USER.socialLinks.x,
  },
  {
    icon: `${baseUrl}/github.webp`,
    title: 'GitHub',
    subtitle: 'TypeAbdullah',
    href: USER.socialLinks.github,
  },
  {
    icon: `${baseUrl}/linkedin.webp`,
    title: 'LinkedIn',
    subtitle: 'Abdullah',
    href: USER.socialLinks.linkedin,
  },
  {
    icon: `${baseUrl}/discord.webp`,
    title: 'Discord',
    subtitle: 'napaextras',
    href: USER.socialLinks.discord,
  },
  {
    icon: `${baseUrl}/facebook.webp`,
    title: 'Facebook',
    subtitle: 'Facebook',
    href: USER.socialLinks.facebook,
  },
  {
    icon: `${baseUrl}/instagram.webp`,
    title: 'Instagram',
    subtitle: '@namelesstheysay',
    href: USER.socialLinks.instagram,
  },
];
