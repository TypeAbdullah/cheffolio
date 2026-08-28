import type { Project } from '../types/projects';

export const PROJECTS: Project[] = [
  {
    id: 'nomengine',
    title: 'NomEngine',
    period: {
      start: '01.2026',
    },
    link: 'https://github.com/TypeAbdullah/NomEngine',
    skills: [
      'Python 3.13',
      'FastAPI',
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
      'Search Engine',
      'Information Retrieval',
      'BM25',
      'Inverted Index',
      'PageRank',
      'Redis',
    ],
    description: `A production-grade, distributed-ready web search engine engineered independently from scratch — 100% custom crawler, indexer, and ranker with no third-party search wrappers.
- **Custom Distributed Crawler**: Asynchronous link parsing, \`robots.txt\` compliance, rate limiting, and content extraction via CLI, Web Admin UI, and REST APIs.
- **Inverted Index & Information Retrieval**: Built a positional inverted index with TF-IDF, BM25 scoring, dynamic phrase matching, and PageRank computation.
- **Search Engine & Admin Dashboard**: AST query parser supporting boolean logic and search operators, real-time index management, and a Next.js + Tailwind management UI.
`,
    isExpanded: true,
  },
  {
    id: 'ai-userbot',
    title: 'AI-Userbot',
    period: {
      start: '01.2026',
    },
    link: 'https://github.com/TypeAbdullah/AI-Userbot',
    skills: [
      'Node.js 22',
      'TypeScript',
      'MTProto',
      '@mtcute/node',
      'MongoDB',
      'Mongoose',
      'AI Agents',
      'OpenRouter',
      'Groq',
      'Anthropic',
      'OpenAI',
      'DeepSeek',
      'Zod',
    ],
    description: `A production-grade, highly modular autonomous AI Telegram userbot agent operating via MTProto.
- **Real MTProto Userbot**: Built with \`@mtcute/node\` and \`@mtcute/dispatcher\` featuring FloodWait auto-recovery, session persistence, and full user-level Telegram action execution.
- **11+ AI Providers & Intelligent Model Routing**: Unified interface across OpenRouter, Groq, Anthropic, Gemini, OpenAI, DeepSeek, and local LLMs with task-specific model routing and cascading multi-provider failover.
- **Extensible Tool Ecosystem & Security**: 50+ granular tools with strict Zod validation, 4-tier RBAC system, persistent chat memory with context compression, and MongoDB-backed cron workflows.
`,
    isExpanded: true,
  },
];
