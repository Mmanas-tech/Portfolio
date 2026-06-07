import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

const Character = ({ char, progress, start, end }: CharacterProps) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === ' ' ? '\u00A0' : char;
  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{display}</span>
      <motion.span
        className="absolute inset-0 inline-block"
        style={{ opacity }}
      >
        {display}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = Array.from(text);
  const total = characters.length;

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        return (
          <Character
            key={i}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
