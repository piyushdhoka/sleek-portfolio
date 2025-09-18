import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';
import { tr } from 'date-fns/locale';

export const projects: Project[] = [
  {
    title: 'Twix AI',
    description:
      'Tweet enhancement tool built with Next.js, TypeScript, and Prisma to optimize tweet editing time and improve engagement.',
    image: '/project/notesbuddy.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/piyushdhoka/twix_ai',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/twixai',
    isWorking: true,
  },
  {
    title: 'Tender Summarizer',
    description:
      'Industry-grade NLP pipeline for automated summarization and entity extraction from tender PDFs for KRIATEC PVT LTD.',
    image: '/project/appwrite.png',
    video: '',
    link: '',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
    ],
    github: 'https://github.com/nakulchandak89/Tender_summerizer',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/tendor-summarizer',
    isWorking: true,
  },
  {
    title: 'Spark Studio',
    description:
      'SaaS platform to generate mathematical animation videos from natural language prompts, making education content creation accessible.',
    image: '/project/syncify.png',
    video: '',
    link: 'https://spark-studio-waitlist.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: '',
    live: 'https://spark-studio-waitlist.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/spark_studio',
    isWorking: false, // Currently in development
  },
  {
    title: 'Attendify AI',
    description:
      'AI-powered facial recognition attendance system using OpenCV for automated and accurate attendance tracking.',
    image: '/project/pasandida.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/attendify_ai',
    isWorking: true,
  },

  {
    title: 'SortVision',
    description:
      'A modern sorting algorithm visualizer that brings algorithms to life with real-time visualizations.',
    image: '/project/pasandida.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'RadixUI', icon: <TypeScript key="typescript" /> },
      { name: 'React.js', icon: <Prisma key="prisma" /> },

    ],
    github: 'https://github.com/piyushdhoka/SortVision',
    live: 'https://www.sortvision.com/',
    details: true,
    projectDetailsPageSlug: '/projects/sortvision',
    isWorking: true,
  },

];
