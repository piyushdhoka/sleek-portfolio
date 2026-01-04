import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [

   {
    isCurrent: false,
    company: 'Bootcoding Pvt Ltd',
    position: 'SDE Intern',
    location: 'Remote',
    image: '/company/aceint.png',
    description: [
      
    ],
    startDate: 'October2025',
    endDate: 'December 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: 'https://aceint.ai/',
  },

  {
    isCurrent: false,
    company: 'Beeman',
    position: 'Security Analyst',
    location: 'Freelance',
    image: '/company/beeman.png',
    description: [
      'Successfully delivered 10+ production-ready feature implementations and critical bug fixes across enterprise-scale repositories, with 100% merge rate demonstrating code quality and adherence to rigorous peer review standards.',
      'Identified 3 medium-risk, 4 low-risk, and 5 informational vulnerabilities, including missing CSP headers, weak caching policies, and timestamp disclosures',
      'Provided actionable remediation strategies to strengthen security posture, documented findings in a detailed report, and shared recommendations with developers',
    ],
    startDate: 'July 2025',
    endDate: 'September 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: 'https://beeman.org.in/',
  },

  {
    isCurrent: false, 
    company: 'Girlscript Summer of Code(GSSoC)',
    position: 'Contributor',
    location: 'Freelance',
    image: '/company/GSSOC.png',
    description: [
      'Successfully delivered 10+ production-ready feature implementations and critical bug fixes across enterprise-scale repositories, with 100% merge rate demonstrating code quality and adherence to rigorous peer review standards.',
      'Spearheaded performance optimization initiatives for high end projects and delivering 60% faster load times.',
    ],
    startDate: 'June 2025',
    endDate: 'August 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: 'https://gssoc.girlscript.tech/',
  },
  {
    isCurrent: false,
    company: 'Social Summer of Code(Social Foundation)',
    position: 'Contributor',
    location: 'Freelance',
    image: '/company/SSOC.png',
    description: [
  'Achieved recognition as one of the top contributors by earning 1000 points through 41 successfully merged PRs.',
  'Enhanced project functionality by contributing production-level code, resolving critical issues, and implementing new features.',
  'Contributed to the following projects during Social Summer of Code:',
  'SortVision: https://sortvision.vercel.app',
  'PromptShell: https://promptshell.vercel.app',
  'Edge Career: https://edge-career.vercel.app',
  'Readme Design Kit: https://readme-design-kit.vercel.app',
  'Notes App: https://notes-app-msdy.onrender.com',
    ],
    startDate: 'June 2025',
    endDate: 'August 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: 'https://reskilll.com/hack/ssoc4',
  },
  {
    isCurrent: false,
    company: 'JRC Softwares',
    position: 'Frontend Developer Intern',
    location: 'Pune, India',
    image: '/company/JRC.png',
    description: [
      'Developed and deployed responsive landing pages using JavaScript, React, and Framer Motion, ensuring cross-device compatibility.',
      'Implemented interactive UI components and optimized animations to improve user engagement and overall client satisfaction.',
    ],
    startDate: 'Dec 2024',
    endDate: 'March 2025',
    technologies: [
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
    ],
    website: 'https://jrcsoftwares.com/',
  },
  {
    isCurrent: false,
    company: 'Institute of Advanced Network Technology',
    position: 'Research Intern',
    location: 'Pune, India (offline)',
    image: '/company/iant.png',
    description: [
      'Acquired hands-on experience in cybersecurity principles, network security, and threat assessment.',
      'Collaborated with a team to conduct security assessments and design strategies for securing network infrastructures.',
    ],
    startDate: 'June 2023',
    endDate: 'July 2023',
    website: 'https://iantindia.com/',
    technologies: [
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'BootStrap',
        href: 'https://getbootstrap.com/',
        icon: <BootStrap />,
      },
    ],
  },
];
