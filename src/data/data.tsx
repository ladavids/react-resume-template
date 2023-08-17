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
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
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
        Utilized Python and API integration to orchestrate synchronized data flow across multiple platforms, optimizing data consistency and accessibility.
      </p>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'Centre for Nuclear Research (UNB)',
    title: 'Co-op Student',
    content: (
        <ul>
          <li>
          Data analysis using python and pandas
          </li>
          <li>
          Wrote well documented code
          </li>
          <li>
          Data visualization using matplotlib
          </li>
          <li>
          Data analysis using python and pandas 
          </li>
          <li>
          Wrote well documented code
          </li>
          <li>
          Data visualization using matplotlib
          </li>
        </ul>
    ),
  },
  {
    date: 'Feb 2022 - April 2022',
    location: 'University of New Brunswick',
    title: 'Student Consultant',
    content: (
      <ul>
        <li>
          Answered and worked through client's questions.
        </li>
        <li>
        Communicated through phone, email, and in person.
        </li>
        <li>
          Provided technical support to students and staff of the university
        </li>
        <li>
        Used a ticketing system to track issues.
        </li>   
       </ul>
    ),
  },
  {
    date: 'September 2020 - April 2021',
    location: 'University of New Brunswick',
    title: 'Co-op Student',
    content: (
      <p>
        - Used Footprints to create, track, and update ticket issues
        - Effectively Troubleshooted issues users had in the Microsoft environment
        - Wrote thorough guides for tasks users had trouble with
        - Helped faculty set up computer and camera equipment
        - Collaborated with administrative staff to create file organizational guidelines and worked with faculty to implement these guidelines
      </p>
    ),
  },
  {
    date: 'September 2019 - December 2019',
    location: 'Canadian Institute of Cybersecurity',
    title: 'Network Flow Analyst',
    content: (
      <p>
        -Reviewed papers on internet security
        -Used python to collect and analyze data on internet traffic
        -effectively worked as a team to speed up the script to be able to process GBs of data
      </p>
    ),
  },
  {
    date: 'April 2018 - November 2018',
    location: "Dairy Queen",
    title: "Crew Leader",
    content: (
      <p>
        *Efficiently resolved customer issues by promptly providing unique and prompt solutions
        *Continuously refined task-switching skills to meet service time goals
        *Confidently shared knowledge of navigating the Point-of-Sales System with fellow employees
        *Coherently synergized, providing a seamless experience to the costumer.
        *Strategized with managers to delegate tasks to team members.
      </p>
    ),
  },
  {
    date: 'July 2017 - November 2017',
    location: "A1 Lumpers",
    title: "Lumper",
    content: (
      <p>
        Contracted out to various positions
        Integrated with multiple teams
        Specifically requested for by name by clients of A1-Lumpers
        A client admitted that I was one of the best works they received from A1
      </p>
    )
  },
  {
    date: 'May 2015 - August 2015',
    location: 'Alberta Provincial Parks',
    title: "Maintenance Service Work I",
    content: (
      <p>
        Worked as a part of a team to mow entire campground in 2 days.
        Promptly found and repaired leaks in the underground irrigation system
        Kept campground neat through picking up garbage, and emptying dumpsters
      </p>
    )
  },
  {
    date: 'May 2014 - August 2014',
    location: 'Alberta Provincial Parks',
    title: "Irrigation Technician",
    content: (
      <p>
        Tested Chloride levels in water using a portable spectrophotometer
        Collected water samples weekly for health purposes  
      </p>
    )
  },
  {
    date: 'May 2013 - August 2013',
    location: 'Eastern Irrigation District',
    title: "Maintenance Service Work I",
    content: (
      <p>
        Accomplished assembling an underground irrigation system for a campground 
        Provided keen observation skills to ensure the safety of hi-hoe operators working close to power lines
        Trusted with the responsibility of driving a truck and moving equipment around
      </p>
    )
  },
  {
    date: 'May 2012 - August 2012',
    location: 'Brooks Golf Course',
    title: "General Labourer",
    content: (
      <p>
        Received compliments for consistently providing patrons with clean bathrooms
Cut the grass of the roughs around 2-3 fairways per day
      </p>
    )
  },
  
];

/**
 * Testimonial section
 */
// ADD These in as I get them or can remember them.
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

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
