import { useRef, CSSProperties } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  num: string;
  name: string;
  url: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const projects: Project[] = [
  {
    num: '01',
    name: 'Nethravedha',
    url: 'https://github.com/Mmanas-tech/nethra-vedha',
    col1Img1: '/nethravedha1.png',
    col1Img2: '/nethravedha2.png',
    col2Img: '/nethravedha3.png',
  },
  {
    num: '02',
    name: 'Cryiq',
    url: 'https://github.com/Mmanas-tech/cryiq',
    col1Img1: '/cryiq1.png',
    col1Img2: '/cryiq2.png',
    col2Img: '/cryiq3.png',
  },
  {
    num: '03',
    name: 'Flow AI',
    url: 'https://github.com/Mmanas-tech/Flow-AI',
    col1Img1: '/flowai1.png',
    col1Img2: '/flowai2.png',
    col2Img: '/flowai3.png',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const ProjectCard = ({
  project,
  index,
  total,
  scrollYProgress,
}: ProjectCardProps) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);

  const cardStyle = {
    scale,
    transformOrigin: 'top center',
    ['--card-offset' as string]: `${index * 28}px`,
  } as unknown as CSSProperties;

  return (
    <div className="h-[85vh] relative">
      <motion.div
        className="sticky sticky-card h-full
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8 flex flex-col"
        style={cardStyle}
      >
        <div className="flex items-end justify-between gap-4 flex-wrap mb-4 sm:mb-6">
          <div className="flex items-end gap-6 sm:gap-10 md:gap-16">
            <span
              className="font-black leading-none text-[#D7E2EA]
                text-[clamp(3rem,10vw,140px)]"
            >
              {project.num}
            </span>
            <div className="pb-2 sm:pb-4 md:pb-6">
              <p
                className="text-[#D7E2EA] font-light uppercase tracking-wider
                  text-xs sm:text-sm opacity-60"
              >
                Featured Project
              </p>
              <h3
                className="text-[#D7E2EA] font-medium uppercase
                  text-[clamp(1rem,2.2vw,2.1rem)] mt-1"
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pb-2 sm:pb-4 md:pb-6">
            <LiveProjectButton href={project.url} />
          </div>
        </div>

        <div
          className="grid gap-2 sm:gap-3 md:gap-4 flex-1 min-h-0
            grid-cols-[40%_60%]"
        >
          <div className="grid grid-rows-2 gap-2 sm:gap-3 md:gap-4 min-h-0">
            <img
              src={project.col1Img1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <img
            src={project.col2Img}
            alt={`${project.name} preview 3`}
            loading="lazy"
            draggable={false}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C]
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10"
    >
      <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32">
        <FadeIn delay={0} y={40} as="h2">
          <span
            className="hero-heading font-black uppercase text-center block
              text-[clamp(3rem,12vw,160px)] leading-none tracking-tight"
          >
            Project
          </span>
        </FadeIn>
      </div>

      <div
        ref={containerRef}
        className="relative px-3 sm:px-4 md:px-6 pt-10 sm:pt-14 md:pt-20
          pb-10 sm:pb-14 md:pb-20"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
