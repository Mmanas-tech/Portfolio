import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { useContact } from '../context/ContactContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Price', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const NAV_LINK_CLASS =
  'text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70';

const PORTRAIT_SRC = '/mascot.png';

const HeroSection = () => {
  const { open } = useContact();
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col overflow-x-clip"
    >
      <FadeIn
        delay={0}
        y={-20}
        className="w-full"
        as="nav"
      >
        <ul className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 list-none">
          {navLinks.map((link) =>
            link.label === 'Contact' ? (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={open}
                  className={`${NAV_LINK_CLASS} cursor-pointer`}
                >
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.label}>
                <a href={link.href} className={`${NAV_LINK_CLASS} inline-block`}>
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>
      </FadeIn>

      <div className="overflow-hidden w-full">
        <FadeIn delay={0.15} y={40} as="h1">
          <span
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full block
              text-[12vw] sm:text-[12.5vw] md:text-[13vw] lg:text-[13vw]
              mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&apos;m manas
          </span>
        </FadeIn>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-60"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, rgba(139, 92, 246, 0.3) 45%, transparent 75%)',
                }}
              />
              <img
                src={PORTRAIT_SRC}
                alt="Mmanas-Tech Mascot"
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div
        className="mt-auto relative z-20 flex justify-between items-end
          px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 gap-6"
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              text-[clamp(0.75rem,1.4vw,1.5rem)]
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          >
            a ui/ux designer and frontend developer crafting immersive digital
            experiences, cinematic animations, and futuristic web interfaces
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
