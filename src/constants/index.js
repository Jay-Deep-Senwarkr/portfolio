const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Automation",
    items: ["N8N", "Claud Code"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Jay-Deep-Senwarkr",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#ff866b",
    link: "https://www.instagram.com/jaydeep_the_gamer/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/jaydeep-senwarkr/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI Podcast Generator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "AI Podcast.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Podcastr is an AI-powered podcast creation platform that lets anyone become a podcaster — no studio, no equipment, no experience required.",
            "Instead of just a podcast player, it's a full creative suite — generate voiceovers with OpenAI's TTS, create stunning thumbnails with DALL·E 3, and publish your podcast in minutes.",
            "Think of it like having a professional producer in your pocket — you write the script, and the AI handles the voice, the art, and the vibe.",
            "Built with Next.js, Convex, and Clerk, it delivers real-time data syncing, secure auth, and a sleek dark-mode UI that feels premium from the first click.",
          ],
        },
        {
          id: 2,
          name: "podcast.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "podcaster-one-omega.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "podcast.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "ZoneWise",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "ZoneWise Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "ZoneWise is a smart Chrome extension that instantly detects international phone numbers and reveals the timezone, business hours, and availability of any contact — right where you're working.",
            "Instead of juggling time zone converters and country code lookups, it surfaces everything you need in a single glance — country, local time, and whether it's a good time to call.",
            "Think of it like a personal calling assistant built into your browser — powered by Google's libphonenumber for bulletproof number parsing, with one-click WhatsApp messaging to reach contacts instantly.",
            "Built with Manifest V3, HubSpot integration, and a 240+ country database, it's the tool that makes every international call feel local.",
          ],
        },
        {
          id: 2,
          name: "zone-wise.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Jay-Deep-Senwarkr/country_code_chrome_extension",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "zone-wise.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "DevEvent",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "DevEvent Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "DevEvent is a full-stack platform built for developers who don't want to miss what's next — hackathons, conferences, meetups, and tech summits, all in one place.",
            "Every event page goes deep — agenda, venue, mode, organizer, audience, and tag-based similar event recommendations, so you always find what's relevant to you.",
            "Book your spot with just an email, and the platform handles the rest — unique constraint enforcement, PostHog analytics, and a confirmation that actually feels instant.",
            "Built on Next.js 16, React 19, MongoDB, Cloudinary, and a custom WebGL light ray background — because developer tools deserve a premium experience too.",
          ],
        },
        {
          id: 2,
          name: "dev-event.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://dev-event-ten-mocha.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "dev-event.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "N8N Workflow Automation",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-20 left-50",
      windowPosition: "top-[54vh] left-7",
      children: [
        {
          id: 1,
          name: "N8N Workflow Automation.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "MeetingSync is a no-code automation workflow built for teams who are tired of spending hours manually logging every meeting into spreadsheets — it captures everything, the moment it happens.",
            "Every meeting entry goes deep — date, time, attendees, internal participants, AI-generated discussion summary via Fireflies, and any custom fields your team needs, all structured exactly how you want.",
            "A new or updated calendar event triggers the entire pipeline — Google Calendar detects it, Fireflies extracts the conversation, AI agents process the data, and Google Sheets gets updated before you even close the call.",
            "Built on n8n, Google Calendar, Fireflies.ai, and AI Agents — because operations teams deserve automation that actually works like magic.",
          ],
        },
        // {
        //   id: 2,
        //   name: "n8n-workflow.com",
        //   icon: "/images/safari.png",
        //   kind: "file",
        //   fileType: "url",
        //   href: "https://dev-event-ten-mocha.vercel.app/",
        //   position: "top-10 right-20",
        // },
        {
          id: 4,
          name: "n8n-workflow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/jaydeep-me.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpg",
    },
    {
      id: 3,
      name: "adventure-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-42 left-80",
      imageUrl: "/images/jaydeep-3.JPG",
    },
    {
      id: 4,
      name: "rider-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-70 left-80",
      imageUrl: "/images/jaydeep-4.jpg",
    },
    {
      id: 5,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-70 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/jaydeep-me.jpg",
      description: [
        "Hey! I’m Jaydeep 👋, a web developer who loves building modern, fast, and practical web applications.",
        "I mainly work with JavaScript, React, Next.js, and the MERN stack—and I enjoy turning ideas into clean, responsive products that people actually enjoy using.",
        "I care a lot about performance, smooth UI, and writing code that’s simple enough for my future self to understand.",
        "I’ve built projects like an AI Podcaster platform, an Airbnb clone, and an ecommerce UI called Zerocart—always experimenting with new tools and better ways to build things.",
        "Outside of coding, you'll probably find me in the gym, exploring new places, watching anime, or tweaking side projects late at night just to make them 1% better.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "trash1.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-10",
    //   imageUrl: "/images/trash-1.png",
    // },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
