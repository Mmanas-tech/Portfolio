import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperStyle?: CSSProperties;
}

const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  className = '',
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  wrapperStyle,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const paddingRef = useRef(padding);
  const strengthRef = useRef(strength);
  paddingRef.current = padding;
  strengthRef.current = strength;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = Math.abs(event.clientX - centerX);
      const distanceY = Math.abs(event.clientY - centerY);
      const pad = paddingRef.current;
      const str = strengthRef.current;

      if (
        distanceX < width / 2 + pad &&
        distanceY < height / 2 + pad
      ) {
        setIsActive(true);
        setPosition({
          x: (event.clientX - centerX) / str,
          y: (event.clientY - centerY) / str,
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
        ...wrapperStyle,
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
