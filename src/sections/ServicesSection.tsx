import FadeIn from '../components/FadeIn';

interface Service {
  num: string;
  name: string;
  desc: string;
}

const services: Service[] = [
  {
    num: '01',
    name: 'UI/UX Design',
    desc: 'Designing intuitive, visually stunning, and user-centered interfaces that combine aesthetics with exceptional usability and memorable digital experiences.',
  },
  {
    num: '02',
    name: 'Frontend Development',
    desc: 'Building fast, responsive, and modern web applications using React, JavaScript, Tailwind CSS, and contemporary frontend technologies.',
  },
  {
    num: '03',
    name: '3D Web Experiences',
    desc: 'Creating immersive web experiences with interactive 3D elements, cinematic animations, and scroll-based storytelling that captivate users.',
  },
  {
    num: '04',
    name: 'AI-Powered Interfaces',
    desc: 'Designing and developing intelligent user interfaces that leverage AI to create smarter, more personalized digital experiences.',
  },
  {
    num: '05',
    name: 'Modern Interactive Websites',
    desc: 'Crafting premium websites with advanced animations, micro-interactions, and cutting-edge design trends that stand out from traditional web experiences.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"
    >
      <h2
        className="font-black uppercase text-center
          text-[clamp(3rem,12vw,160px)] leading-none tracking-tight
          mb-16 sm:mb-20 md:mb-28"
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-start gap-6 sm:gap-10 md:gap-16
              py-8 sm:py-10 md:py-12
              border-b border-[rgba(12,12,12,0.15)] last:border-b-0"
          >
            <span
              className="font-black leading-none flex-shrink-0
                text-[clamp(3rem,10vw,140px)]"
            >
              {service.num}
            </span>
            <div className="pt-2 sm:pt-3 md:pt-5">
              <h3
                className="font-medium uppercase
                  text-[clamp(1rem,2.2vw,2.1rem)]"
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl mt-2 sm:mt-3
                  text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60"
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
