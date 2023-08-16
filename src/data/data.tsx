import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React CV/Resume',
  description: "A CV project built from a template provided by tbakerx",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `My name is Logan Davidson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Fredericton based <strong className="text-stone-100">Software Developer</strong>, currently working
        at <strong className="text-stone-100">Applied Digital (APLD) </strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">photographing birds and wildlife</strong>
        , or exploring {' '}
        <strong className="text-stone-100">Fredericton</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Fredericton, NB', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Birds, Urban Wildlife', Icon: SparklesIcon},
    {label: 'Study', text: 'University of New Brunswick', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Applied Digital, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 3,
      },
      {
        name: 'Typescript',
        level: 2,
      },
      {
        name: 'Vue.js',
        level: 3,
      },
      {
        name: 'CSS',
        level: 4,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Development',
    skills: [
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'C',
        level: 5
      }
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      {
        name: 'Windows',
        level: 8,
      },
      {
        name: 'Linux',
        level: 7,
      },
      {
        name: 'MacOS',
        level: 7,
      },
      {
        name: 'Android',
        level: 7,
      },
      {
        name: 'iOS',
        level: 7,
      },
      {
        name: 'iPadOS',
        level: 8,
      }
    ]
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ND Spoons',
    description: 'A game made in a university course with a team of 3 members.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Cat SPA',
    description: 'A Single Page Application made in a university course with a team of 3 members.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2019 - May 2023',
    location: 'University of New Brunswick',
    title: 'Bachelor of Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2013 - 2017',
    location: 'The University of Lethbridge',
    title: 'Bachelor of Science: Neuroscience',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2012 - 2013',
    location: 'University of Alberta',
    title: 'Open Studies',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2011 - 2012',
    location: 'University of Alberta',
    title: 'Bachelor of Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'Applied Digital (NASDAQ: APLD)',
    title: 'Software Developer - Intern',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'Centre for Nuclear Research (UNB)',
    title: 'Co-op Student',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Feb 2022 - April 2022',
    location: 'University of New Brunswick',
    title: 'Student Consultant',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'September 2020 - April 2021',
    location: 'University of New Brunswick',
    title: 'Co-op Student',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'September 2019 - December 2019',
    location: 'Canadian Institute of Cybersecurity',
    title: 'Network Flow Analyst',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'April 2018 - November 2018',
    location: "Dairy Queen",
    title: "Crew Leader",
    content: (
      <p>

      </p>
    ),
  },
  {
    date: 'July 2017 - November 2017',
    location: "A1 Lumpers",
    title: "Lumper",
    content: (
      <p>

      </p>
    )
  },
  {
    date: 'May 2015 - August 2015',
    location: 'Alberta Provincial Parks',
    title: "Maintenance Service Work I",
    content: (
      <p>

      </p>
    )
  },
  {
    date: 'May 2014 - August 2014',
    location: 'Alberta Provincial Parks',
    title: "Irrigation Technician",
    content: (
      <p>

      </p>
    )
  },
  {
    date: 'May 2013 - August 2013',
    location: 'Eastern Irrigation District',
    title: "Maintenance Service Work I",
    content: (
      <p>

      </p>
    )
  },
  {
    date: 'May 2012 - August 2012',
    location: 'Alberta Provincial Parks',
    title: "Maintenance Service Work I",
    content: (
      <p>

      </p>
    )
  },
  
];

/**
 * Testimonial section
 */
// ADD These in as I get them or can remember them.
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me via the following contct information.',
  items: [
    {
      type: ContactType.Email,
      text: 'logalexdavid@hotmail.com',
      href: 'mailto:logalexdavid@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Fredericton NB, Canada',
      href: 'https://goo.gl/maps/Rj9TcVbiiyvpMfGZ8',
    },
    {
      type: ContactType.Instagram,
      text: '@logalexdav',
      href: 'https://www.instagram.com/logalexdav/',
    },
    {
      type: ContactType.Github,
      text: 'ladavids',
      href: 'https://github.com/ladavids',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ladavids'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/logan-davidson-22a543123'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/logalexdav/'},
];
