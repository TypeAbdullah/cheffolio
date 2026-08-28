import type { User } from '@/features/portfolio/types/user';

export const USER: User = {
  firstName: 'Abdullah',
  lastName: '',
  displayName: 'Abdullah',
  username: 'TypeAbdullah',
  alternateName: ['Abdullah', 'TypeAbdullah', 'Abdullah', 'abdullah'],
  gender: 'male',
  pronouns: 'he/him',
  bio: 'Love coding catchy things :>',
  flipSentences: ['Software Developer', 'Problem Solver'],
  address: 'Chittagong, Bangladesh',
  phoneNumber: 'Kzg4MA==', // E.164 format, base64 encoded (+880)
  email: 'b2duYXBhZXh0cmFAZ21haWwuY29t', // base64 encoded (ognapaextra@gmail.com)
  website: 'https://abdullah.dpdns.org',
  jobTitle: 'Software Developer',
  resume: '#',
  resumeDownloadUrl: '#',
  jobs: [
    {
      title: 'Developer',
      company: 'ExScans',
      website: 'https://exscans.dpdns.org',
    },
  ],
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Web Frameworks',
    'Fullstack Development',
  ],
  about: `
- First-year student with a strong passion for web development and AI.
- Hands-on experience with SSR-driven frameworks such as **Next.js** and **Python**.
- Focused on high-performance and user-centric applications, with attention to scalability and clean design.
`,
  avatar: 'https://avatars.githubusercontent.com/u/143931418?v=4',
  socialLinks: {
    x: 'https://x.com/becauseunknown',
    github: 'https://github.com/TypeAbdullah',
    linkedin: 'https://linkedin.com/',
    discord: 'https://discord.com/users/napaextras',
    facebook: 'https://facebook.com',
    instagram: 'https://www.instagram.com/namelesstheysay',
  },
  ogImage: 'https://avatars.githubusercontent.com/u/143931418?v=4',
  timeZone: 'Asia/Dhaka',
  keywords: [
    'Abdullah',
    'TypeAbdullah',
    'Abdullah portfolio',
    'Abdullah dev portfolio',
    'Abdullah - dev portfolio',
    'abdullah.dpdns.org',
    'abdullah dev',
    'TypeAbdullah portfolio',
    'dev portfolio',
  ],
  dateCreated: '2026-03-22',
};
