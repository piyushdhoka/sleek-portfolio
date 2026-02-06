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
    title: 'GradeU',
    description:
      'AI-driven education platform that provides adaptive learning paths, skill based assessments and integrated career tools prepare students for the cybersecurity industry.',
    image: '/project/cybercoach.png',
    video: 'https://ik.imagekit.io/broggzhnf/cybercoach',
    link: 'https://www.gradeu.in/',
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
    github: '',
    live: 'https://www.gradeu.in/',
    details: true,
    projectDetailsPageSlug: '/projects/cybercoach',
    isWorking: true,
  },

   {
    title: 'Vector Store RAG Agent for DIP Diet',
    description:
      'A comprehensive web application for personal productivity, health tracking, and AI-driven Disciplined and Intelligent Plan Diet recommendations.',
    image: '/project/architecture.png',
    video: 'https://ik.imagekit.io/broggzhnf/InShot_20251029_022226940.mp4?updatedAt=1762349006752',
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
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/dip_diet',
    isWorking: true,
  },

     {
    title: 'Sweep',
    description:
      'Fast zero-config CLI to list & clean unused JS/TS imports and detect unused code.',
    image: '/project/sweep.png',
    video: '',
    link: 'https://sweep-npm.vercel.app/',
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
    github: 'https://github.com/piyushdhoka/sweep',
    live: 'https://sweep-npm.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/sweep',
    isWorking: true,
  },
    {
    title: 'Movinglines',
    description:
      'SaaS platform to generate animated videos from natural language prompts, making education content creation accessible.',
    image: '/project/movinglines.png',
    video: '',
    link: 'https://www.movinglines.co.in/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/piyushdhoka/movinglines',
    live: 'https://www.movinglines.co.in/',
    details: true,
    projectDetailsPageSlug: '/projects/spark_studio',
    isWorking: true, 
  },
  
    {
    title: 'Repo Scout',
    description:
      'Repo Scout helps you discover and contribute to curated open source GitHub issues matched to your skills and interests.',
    image: '/project/reposcout.png',
    video: '',
    link: 'https://reposcout.sparkstudio.co.in/',
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
    github: 'https://github.com/piyushdhoka/Repo-Scout',
    live: 'https://reposcout.sparkstudio.co.in/',
    details: true,
    projectDetailsPageSlug: '/projects/repo_scout',
    isWorking: true,
  },
  
  
   {
    title: 'Chainlit RAG Using LlamaIndex',
    description:
      'An AI-powered learning companion built with Chainlit and LlamaIndex, featuring RAG for accurate, context-aware responses.',
    image: '/project/llamaindex.png',
    video: '',
    link: 'https://huggingface.co/spaces/piyushdhoka27/cyber-mentor-space',
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
    github: 'https://github.com/piyushdhoka/Cyber_RAG',
    live: 'https://huggingface.co/spaces/piyushdhoka27/cyber-mentor-space',
    details: true,
    projectDetailsPageSlug: '/projects/llamaindex',
    isWorking: true,
  },

   {
    title: 'Sympforyou',
    description:
      'An AI-powered multi-channel health assistant that orchestrates IBM Watsonx, NLU, and Speech services to deliver real-time, voice-enabled symptom analysis and medical insights across web and WhatsApp platforms.',
    image: '/project/ibm.png',
    video: '',
    link: 'https://sympforyou.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/piyushdhoka/ibm-healthcare',
    live: 'https://sympforyou.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/ibm',
    isWorking: true, 
  },

  {
    title: 'Twix AI',
    description:
      'Tweet enhancement tool built with Next.js, TypeScript, and Prisma to optimize tweet editing time and improve engagement.',
    image: '/project/twix_ai.png',
    video: '',
    link: 'https://twix-ai.vercel.app/',
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
    live: 'https://twix-ai.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/twixai',
    isWorking: true,
  },

    {
    title: 'Motiatube',
    description:
      'MotiaTube is an AI‑powered YouTube channel analyzer that generates crazy video titles, with backend workflows orchestrated by the Motia framework.',
    image: '/project/motiatube.png',
    video: '',
    link: 'https://motiatube.sparkstudio.co.in/',
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
    github: 'https://github.com/piyushdhoka/motia_yt',
    live: 'https://motiatube.sparkstudio.co.in/',
    details: true,
    projectDetailsPageSlug: '/projects/motiatube',
    isWorking: true,
  },
    {
    title: 'Supabase MCP Server',
    description:
      'A lightweight, high-performance MCP server implementation for managing multiplayer sessions and plugins.',
    image: '/project/mcp_server.png',
    video: '',
    link: 'https://mcp.sparkstudio.co.in/',
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
    github: 'https://github.com/piyushdhoka/mcp_server',
    live: 'https://mcp.sparkstudio.co.in/',
    details: true,
    projectDetailsPageSlug: '/projects/mcp_server',
    isWorking: true,
  },

];
