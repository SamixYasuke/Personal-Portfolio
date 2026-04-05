import type { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samuel",
  lastName: "Adekolu",
  name: "Samuel Adekolu (Samixx Yasuke)",
  role: "Fullstack Node.js Developer",
  avatar: "/images/me.jpg",
  email: "contact@adekolusamuel.me",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SamixYasuke",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Building robust backend & frontend systems and seamless fullstack
      experiences
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Lingoframe</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://lingoframe.com/",
  },
  subline: (
    <>
      I'm Samuel, a fullstack developer focused on{" "}
      <Text as="span" size="xl" weight="strong">
        efficiency
      </Text>{" "}
      and{" "}
      <Text as="span" size="xl" weight="strong">
        scalability
      </Text>
      . I build high-performance APIs and intuitive web applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Lagos-based Fullstack Node.js Developer with a strong foundation
        in backend engineering. I specialize in building scalable architectures,
        optimized databases, and seamless user interfaces using the modern
        JavaScript ecosystem.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Octo 5 Holdings",
        timeframe: "June 2025 – March 2026",
        role: "Fullstack Intern (Part-time)",
        achievements: [
          <span key="achievement-1">
            Contributed to the development of real estate management solutions,
            integrating complex backend logic with responsive frontend
            components.
          </span>,
          <span key="achievement-2">
            Optimized database queries and API endpoints, improving overall
            system responsiveness.
          </span>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "HNG Tech",
        timeframe: "June 2024 – August 2024",
        role: "Backend Intern",
        achievements: [
          <span key="achievement-3">
            Developed and maintained robust backend services for high-traffic
            applications, focusing on performance and security.
          </span>,
          <span key="achievement-4">
            Collaborated with a cross-functional team in an agile environment to
            deliver feature-rich API solutions under strict deadlines.
          </span>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Veritas University Abuja",
        description: (
          <>
            Studied Computer Science and Information Technology. Visit:{" "}
            <a
              href="https://www.veritas.edu.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veritas University Abuja
            </a>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Node.js & TypeScript",
        description: (
          <>
            Building scalable APIs and backend services using Express, TypeORM,
            and Redis.
          </>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "node",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Express.js",
            icon: "express",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "Frontend & Infrastructure",
        description: (
          <>
            Managing structured and unstructured data with PostgreSQL and
            MongoDB. Deployment on Linux (Ubuntu) and AWS. Expertise in Next.js,
            React, and Vite.
          </>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Vite",
            icon: "vite",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Ubuntu",
            icon: "ubuntu",
          },
          {
            name: "Linux",
            icon: "linux",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
