import type { Experience } from '../types/experiences';

export const EXPERIENCES: Experience[] = [
  {
    id: 'work',
    companyName: 'ExScans',
    positions: [
      {
        id: '1',
        title: 'Software Developer',
        employmentPeriod: {
          start: '08.2026',
        },
        icon: 'code',
        skills: [
          'C++',
          'Python',
          'TypeScript',
          'Software Engineering',
          'Docker',
          'FastAPI',
          'React',
          'Next.js',
          'Tailwind CSS',
          'Git',
          'GitHub',
          'Linux',
        ],
        isCurrentPosition: true,
        isExpanded: true,
        description: `
- Currently working as a Software Developer at [ExScans](https://exscans.dpdns.org).
- Developing and maintaining high-performance scanning solutions using modern web technologies.
- Collaborating with a talented team to deliver innovative features and improve user experience.
`,
      },
    ],
  },
];
