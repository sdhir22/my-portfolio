import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Swayam",
  lastName: "Dhir",
  name: `Swayam Dhir`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "sdhir03@gmail.com",
  location: "America/St_Johns", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Thoughts on software, design, and building things that matter.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sdhir22",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/swayam-dhir-58526b36b/",
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>while(alive) {"{"}learn(); build();{"}"}</>,
  featured: {
    display: false,
    title: <></>,
    href: "/work",
  },
  subline: <>“Genius is one percent inspiration and ninety-nine percent perspiration.” — Thomas Edison</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software engineer who loves building things that feel good to use. I'm still early in
        my career but I care deeply about the craft — writing code that's clean, fast, and
        maintainable. I'm always looking to grow, whether that's picking up a new part of the stack,
        shipping something I'm proud of, or understanding the "why" behind good software design. My
        goal is to keep building, keep learning, and eventually work on products that genuinely
        matter to people.
      </>
    ),
  },
  work: {
    display: false, // Add your work experience here
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false, // Add your education here
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: (
          <>Used professionally at DIAG Labs to build and maintain a web application for medical image analysis, alongside data profiling and quality control workflows.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "JavaScript & TypeScript",
        description: (
          <>Used at DIAG Labs for full-stack web development and in NutriPlan for building a type-safe, server-rendered web application.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "React & Next.js",
        description: (
          <>Building NutriPlan with Next.js, deployed on Vercel — integrating the Spoonacular API and Vercel AI SDK to deliver personalized meal plans and recipes.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
        ],
        images: [],
      },
      {
        title: "Ruby on Rails",
        description: (
          <>Contributed to a production Rails web app at DIAG Labs, following team best practices including code reviews, testing, and Git-based collaboration.</>
        ),
        tags: [
          {
            name: "Ruby on Rails",
            icon: "rubyonrails",
          },
        ],
        images: [],
      },
      {
        title: "C++",
        description: (
          <>Built Deadlands, a full game in C++ using SFML — implementing an ECS architecture, A* pathfinding AI, a custom level editor with ImGui, and GLSL shaders for dynamic visual effects.</>
        ),
        tags: [
          {
            name: "C++",
            icon: "cplusplus",
          },
          {
            name: "SFML",
          },
          {
            name: "ImGui",
          },
        ],
        images: [],
      },
      {
        title: "Git",
        description: (
          <>Used professionally at DIAG Labs in a distributed team, contributing to a production codebase with shared Git workflows, code reviews, and collaborative development practices.</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
        ],
        images: [],
      },
      {
        title: "AI-Assisted Development",
        description: (
          <>Used Cursor throughout NutriPlan to accelerate feature development and iterate on UI/UX design — integrating AI tooling as a core part of the development workflow rather than an afterthought.</>
        ),
        tags: [
          {
            name: "Cursor",
          },
          {
            name: "Vercel AI SDK",
          },
        ],
        images: [],
      },
      {
        title: "Flutter & Firebase",
        description: (
          <>Built Maple Buy, a cross-platform mobile app in Flutter with Firebase for real-time data and auth, GoRouter for navigation, and a third-party API for grocery product data.</>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software and building things...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images from the template — replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
