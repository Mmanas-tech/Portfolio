import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Phone,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';
import { useContact } from '../context/ContactContext';

interface ContactItem {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const items: ContactItem[] = [
  {
    icon: Phone,
    label: 'Phone',
    value: '8125464855',
    href: 'tel:+918125464855',
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mmanas.tech@gmail.com',
    href: 'mailto:mmanas.tech@gmail.com',
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'manas-maddela',
    href: 'https://www.linkedin.com/in/manas-maddela-1698b8372/',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Mmanas-tech',
    href: 'https://github.com/Mmanas-tech',
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: 'manas_14xd',
    href: 'https://www.instagram.com/manas_14xd/',
    external: true,
  },
];

const ContactPage = () => {
  const { close } = useContact();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [close]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-5 sm:px-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 bg-[#0C0C0C]"
        onClick={close}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.28) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-2xl my-auto py-16"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.45,
          delay: 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <button
          onClick={close}
          aria-label="Close contact"
          className="absolute top-0 right-0 sm:-top-4 sm:-right-4 w-11 h-11 rounded-full
            border border-[#D7E2EA]/30 text-[#D7E2EA]
            flex items-center justify-center
            hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/60
            transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center
            text-[clamp(3rem,12vw,120px)]"
        >
          Contact
        </h2>
        <p
          className="text-[#D7E2EA]/70 text-center mt-4
            text-xs sm:text-sm uppercase tracking-widest font-light"
        >
          Let's build something incredible together
        </p>

        <div className="flex flex-col mt-10 sm:mt-14 border-t border-[#D7E2EA]/10">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 sm:gap-6
                  py-5 sm:py-6 border-b border-[#D7E2EA]/10
                  text-[#D7E2EA] hover:text-white transition-colors"
              >
                <Icon
                  className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0
                    opacity-60 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] sm:text-xs uppercase tracking-widest
                      opacity-50 font-light"
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-base sm:text-lg md:text-xl font-medium mt-0.5 truncate"
                  >
                    {item.value}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
