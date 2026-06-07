import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href: string;
  className?: string;
}

const LiveProjectButton = ({ href, className = '' }: LiveProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        inline-flex items-center gap-2
        transition-colors duration-200 hover:bg-[#D7E2EA]/10
        ${className}`}
    >
      <span>Live Project</span>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
    </a>
  );
};

export default LiveProjectButton;
