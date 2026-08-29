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
    id: 'nomdb',
    title: 'NomDB',
    period: {
      start: '01.2026',
    },
    link: 'https://github.com/TypeAbdullah/NomDB',
    skills: [
      'Python 3.13',
      'asyncio',
      'In-Memory Database',
      'RESP2 / RESP3',
      'TCP Server',
      'SkipList',
      'AOF / RDB Persistence',
      'Pub/Sub',
      'Replication',
      'Clustering',
      'PyPI',
      'Web Dashboard',
    ],
    description: `A high-performance in-memory key-value database and TCP server built from scratch in pure Python and asyncio — zero Redis wrappers, zero C dependencies.
- **RESP2/RESP3 Protocol & Multi-Mode**: Compatible with Redis clients, runnable as a standalone TCP server, embedded library (\`import nomdb\`), self-hosted instance, or real-time Web Dashboard.
- **Custom Native Data Structures**: Pure Python SkipList for Sorted Sets with $O(\\log N)$ rank/range queries, strings, hashes, lists, sets, and dual active/lazy timestamp min-heap expiration.
- **Persistence, Pub/Sub & Cluster Routing**: AOF rewriting + binary RDB snapshots with SHA-256 checks, transactions (\`MULTI\`/\`EXEC\`/\`WATCH\`), replication with circular ring buffers (\`PSYNC\`), and 16,384 CRC16 cluster routing.
`,
    isExpanded: true,
  },
];
