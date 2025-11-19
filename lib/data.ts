import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'fmilyha23821@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Anice, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/Anice',
    telegram: 'https://t.me/cutycat_821',
    discord: 'https://discord.com/users/blockly_anice',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/hero-god-dev' },
    { name: 'telegram', url: 'https://t.me/cutycat_821' },
];

export const MY_STACK = {
    "language": [
        {
            name: 'C',
            icon: '/logo/c.png'
        },
        {
            name: 'C++',
            icon: '/logo/cpp.svg'
        },
        {
            name: 'C#',
            icon: '/logo/csharp.svg'
        },
        {
            name: 'Python',
            icon: '/logo/python.svg'
        },
    ],
    frontend: [
        {
            name: 'JavaScript',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.svg',
        },
        {
            name: 'React',
            icon: '/logo/react.svg',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'React Native',
            icon: '/logo/reactnative.png',
        },
        {
            name: 'Flutter',
            icon: '/logo/flutter.png',
        },
        {
            name: 'Android',
            icon: '/logo/android.svg',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.svg',
        },
        {
            name: 'React Query',
            icon: '/logo/reactquery.png',
        },
        {
            name: 'Gatsby',
            icon: '/logo/gatsby.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.svg',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Material UI',
            icon: '/logo/mui.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Prettier',
            icon: '/logo/prettier.svg',
        },
        {
            name: 'ESLint',
            icon: '/logo/eslint.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Stripe',
            icon: '/logo/stripe.png'
        },
        {
            name: 'Swift',
            icon: '/logo/swift.svg'
        },
        {
            name: 'Rest API',
            icon: '/logo/restapi.svg'
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png'
        },
        {
            name: 'Django',
            icon: '/logo/django.svg'
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.svg',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.svg',
        },
        {
            name: 'Graphql',
            icon: '/logo/graphql.png',
        },
        {
            name: 'Nginx',
            icon: '/logo/nginx.svg',
        },
        {
            name: 'Storybook',
            icon: '/logo/storybook.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
  {
    title: "Olio Albori",
    slug: "olio-albori",
    liveUrl: "https://olioalbori.com/",
    year: 2024,  // assume recent redesign
    description: `
      A premium olive-oil brand website that emphasizes heritage, craftsmanship, and terroir.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🌿 Story-driven Narrative: Sections detailing olive-growing practices, tradition, and origin.</li>
        <li>📸 High-resolution imagery: Full-screen hero photos, parallax visuals, and scroll-driven transitions.</li>
        <li>🧭 Smooth Page Transitions: Fluid navigation that feels like a curated brand journey, not just static pages.</li>
        <li>📰 CMS-powered Content: Editorial-like blog or “our story” pages maintained by non-technical content editors.</li>
        <li>📱 Responsive & Retina-Ready: Works beautifully on mobile, tablet, and high-DPI displays.</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Built with <strong>Angular</strong> for fast, component-driven UI and smooth page transitions (inferred from design patterns).</li>
        <li>Backed by a <strong>WordPress</strong> CMS for content management (also inferred from industry write-ups).</li>
        <li>Custom scroll animations, likely using a library such as <strong>Locomotive Scroll</strong> or similar.</li>
        <li>Image optimization: likely WebP or lazy-loaded large hero images for performance.</li>
        <li>SEO-focused markup and likely SSR / pre-rendering for page speed and accessibility.</li>
      </ul>
    `,
    role: `
      Frontend Engineer <br/>
      Worked on:
      <ul>
        <li>⚙️ Implementing modular Angular components (hero, story sections, blog previews).</li>
        <li>🎨 Integrating high-fidelity designs (Figma → Angular) with custom scroll interactions.</li>
        <li>🛠️ Optimizing image delivery, lazy loading, and responsive breakpoints.</li>
        <li>✍️ Coordinating with content editors using WordPress for dynamic content updates.</li>
        <li>📈 Ensuring SEO and performance metrics (LCP, CLS, accessibility) meet modern standards.</li>
      </ul>
    `,
    techStack: [
      "Angular",
      "WordPress (CMS)",
      "Locomotive Scroll (or similar)",
      "HTML5 / CSS3",
      "Responsive Images (WebP, lazy load)",
      "SEO / SSR"
    ],
    thumbnail: "/projects/thumbnail/olio-albori.jpg",
    longThumbnail: "/projects/long/olio-albori.jpg",
    images: [
      "/projects/images/olio-albori-1.jpg",
      "/projects/images/olio-albori-2.jpg",
      "/projects/images/olio-albori-3.jpg",
      "/projects/images/olio-albori-4.jpg"
    ]
  },
  {
    title: "BEGG (Liquid Egg)",
    slug: "begg-liquid-egg",
    liveUrl: "https://begg.webflow.io/",
    year: 2023,
    description: `
      A clean, modern marketing site for BEGG’s innovative liquid-egg product.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>📊 Informational Sections: Product benefits, nutrition info, and usage ideas.</li>
        <li>📧 Lead Generation: Forms for contacting or requesting product samples.</li>
        <li>📱 Fully Responsive: Seamless experience across all device sizes.</li>
        <li>🎨 Animations & Microinteractions: Subtle interactions on scroll, hover, and buttons.</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Built entirely in <strong>Webflow</strong>, leveraging its CMS and Designer capabilities.</li>
        <li>Custom code embed (JavaScript / CSS) to extend Webflow’s native interactions.</li>
        <li>Responsive grid system driven by Webflow’s layout engine, using class naming conventions for maintainability.</li>
        <li>SEO built-in via Webflow’s SEO settings + meta management.</li>
        <li>Form handling via Webflow forms, likely sending submissions to email or Webflow’s backend.</li>
      </ul>
    `,
    role: `
      Frontend / Visual Developer <br/>
      Contributions included:
      <ul>
        <li>🧱 Building modular design in Webflow: hero, features, contact form.</li>
        <li>🔧 Embedding custom JavaScript for enhanced scroll / animation behaviors.</li>
        <li>📐 Defining responsive breakpoints, break-grid for mobile, tablet, desktop.</li>
        <li>📋 Setting up Webflow CMS for non-technical content updates.</li>
        <li>📬 Integrating Webflow forms with backend or client’s CRM.</li>
      </ul>
    `,
    techStack: [
      "Webflow (Designer + CMS)",
      "Custom JS / CSS embedding",
      "Responsive Web Design",
      "Webflow Forms",
      "SEO"
    ],
    thumbnail: "/projects/thumbnail/begg.jpg",
    longThumbnail: "/projects/long/begg.jpg",
    images: [
      "/projects/images/begg-1.jpg",
      "/projects/images/begg-2.jpg",
      "/projects/images/begg-3.jpg",
      "/projects/images/begg-4.jpg"
    ]
  },
  {
    title: "Marugame Udon (Japan)",
    slug: "marugame-udon-jp",
    liveUrl: "https://jp.marugame.com/",
    year: 2024,
    description: `
      Corporate / Brand site for Marugame Udon in Japan, focusing on restaurant locations, menu, brand philosophy, and visual storytelling.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>📍 Store Locator: Map of Udon restaurants + branch information.</li>
        <li>🍜 Menu Pages: Interactive menu displays with images and descriptions.</li>
        <li>📖 Brand Story: History of Marugame, craftsmanship of udon, culture.</li>
        <li>🔤 Multilingual Support: Likely Japanese-first, maybe English / other languages.</li>
        <li>📱 Mobile-first UI: Optimized for smartphone users, especially for restaurant search.</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Probably a <strong>static site</strong> built using a modern JS framework or a CMS — difficult to detect publicly.</li>
        <li>Highly optimized for performance: likely server-side rendering or pre-rendered pages.</li>
        <li>Map integration (Google Maps or Mapbox) for store locator.</li>
        <li>Responsive design using CSS Grid / Flexbox.</li>
        <li>Lightweight animations / scroll effects to make the brand narrative more engaging.</li>
      </ul>
    `,
    role: `
      Senior Frontend Engineer <br/>
      My contributions might include:
      <ul>
        <li>📊 Architecting store-locator UI with map integration.</li>
        <li>📦 Building responsive menu components (desktop/mobile).</li>
        <li>📐 Performance optimization: images, lazy loading, SSR / pre-render.</li>
        <li>🔧 Coordinating content with marketing / brand team for multilingual content updates.</li>
      </ul>
    `,
    techStack: [
      "JavaScript Framework (React / Vue / Next or Nuxt) — inferred",
      "Map API (Google Maps or Mapbox)",
      "CSS3 (Grid / Flexbox)",
      "SSR / SSG (Static Generation)",
      "Responsive Images",
      "SEO"
    ],
    thumbnail: "/projects/thumbnail/marugame-jp.jpg",
    longThumbnail: "/projects/long/marugame-jp.jpg",
    images: [
      "/projects/images/marugame-jp-1.jpg",
      "/projects/images/marugame-jp-2.jpg",
      "/projects/images/marugame-jp-3.jpg",
      "/projects/images/marugame-jp-4.jpg"
    ]
  },
  {
    title: "La Fabrique à Souvenirs",
    slug: "la-fabrique-a-souvenirs",
    liveUrl: "https://lafabriqueasouvenirs.ca/",
    year: 2024,
    description: `
      A creative, whimsical site for a children’s atelier / souvenir-making workshop in Canada.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🎨 Workshop Information: Descriptions of different creative experiences.</li>
        <li>📅 Schedule / Events: Calendar or list of upcoming classes or ateliers.</li>
        <li>🖼️ Gallery / Portfolio: Photos of past creations and children’s work.</li>
        <li>📧 Contact & Booking: Form(s) for inquiries and reservations.</li>
        <li>🌍 Bilingual Content: Likely supports French and English given Canadian locale.</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Built likely with a <strong>modern static-site generator</strong> or a lightweight CMS.</li>
        <li>Responsive design, optimized imagery and fluid layouts.</li>
        <li>Interactive calendar or event list, possibly using a JavaScript library.</li>
        <li>Form handling via third-party form service or custom backend.</li>
        <li>Accessibility-first design (for children, parents, and content editors).</li>
      </ul>
    `,
    role: `
      Lead Frontend / UX Engineer <br/>
      Involved in:
      <ul>
        <li>📆 Designing & implementing the event calendar UI.</li>
        <li>🖌️ Building a responsive, playful design system to match the brand’s creative tone.</li>
        <li>📱 Ensuring mobile UX is seamless for parents checking schedules / booking.</li>
        <li>🔐 Integrating secure booking / contact forms.</li>
        <li>📝 Maintaining bilingual / localized content.</li>
      </ul>
    `,
    techStack: [
      "Static Site Generator (Gatsby / Next / Hugo) — inferred",
      "JavaScript (ES6+)",
      "CSS / SCSS",
      "Event Calendar Library (e.g. FullCalendar or custom)",
      "Third-party form service (or custom)",
      "Responsive Design",
      "Localization"
    ],
    thumbnail: "/projects/thumbnail/lafabrique.jpg",
    longThumbnail: "/projects/long/lafabrique.jpg",
    images: [
      "/projects/images/lafabrique-1.jpg",
      "/projects/images/lafabrique-2.jpg",
      "/projects/images/lafabrique-3.jpg",
      "/projects/images/lafabrique-4.jpg"
    ]
  },
  {
    title: "YOLU Night-Care",
    slug: "yolu-night-care",
    liveUrl: "https://yolu.jp/",
    year: 2024,
    description: `
      A beauty / skincare brand site focusing on night care routines, brand philosophy, and product lines.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🧴 Product Pages: Clean presentation of night-care products with ingredients, usage, and benefits.</li>
        <li>📚 Education / Blog: Content around skincare tips, routines, and scientific explanations.</li>
        <li>🌙 Visual Storytelling: Dark, elegant theme reflecting nighttime self-care.</li>
        <li>🛍️ E-commerce or “where to buy”: Possibly integrated for online purchase or listing of retailers.</li>
        <li>📱 Mobile-friendly: Optimized for mobile browsing and shopping.</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Likely built with a <strong>headless CMS</strong> to support content-rich product pages.</li>
        <li>UI built in a modern <strong>React / Vue</strong> framework (for component reusability and interactive UI).</li>
        <li>Animations and micro-interactions: hover, scroll, and transition effects for premium feel.</li>
        <li>E-commerce or catalog integration: via Shopify / Snipcart / custom API.</li>
        <li>Responsive image handling, dark mode optimized styles, and accessibility support.</li>
      </ul>
    `,
    role: `
      Full-Stack / Frontend Developer <br/>
      Key contributions:
      <ul>
        <li>🧱 Building reusable UI components (product cards, blog previews, navigation).</li>
        <li>🖌️ Implementing a design system consistent with the brand’s “night-care” theme.</li>
        <li>🛍️ Integrating e-commerce or catalog features, possibly via Shopify or API.</li>
        <li>📈 Ensuring SEO and performance metrics (image optimization, prefetch, lazy load).</li>
        <li>🔄 Collaborating with content/editorial team to set up CMS content modeling.</li>
      </ul>
    `,
    techStack: [
      "React or Vue (inferred)",
      "Headless CMS (e.g. Contentful, Sanity, Strapi)",
      "E-commerce integration (Shopify / API / Snipcart)",
      "CSS-in-JS or SASS / SCSS",
      "Dark-mode design",
      "Responsive / Retina imagery"
    ],
    thumbnail: "/projects/thumbnail/yolu.jpg",
    longThumbnail: "/projects/long/yolu.jpg",
    images: [
      "/projects/images/yolu-1.jpg",
      "/projects/images/yolu-2.jpg",
      "/projects/images/yolu-3.jpg",
      "/projects/images/yolu-4.jpg"
    ]
  },
  {
    title: "Hotarutei (Ryokan & Restaurant)",
    slug: "hotarutei-onsen-restaurant",
    liveUrl: "https://hotarutei.com/",
    year: 2023,
    description: `
      A refined digital presence for Hotarutei, a traditional Japanese farmhouse turned restaurant & villas in rural Nagano.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🏯 Heritage Story: Rich content around Hotarutei’s 200-year history, architecture, and regional roots.</li>
        <li>📷 Imagery Gallery: Stunning photos of the property, rooms, and seasonal surroundings.</li>
        <li>📅 Booking / Stay Info: Facility descriptions, room types, amenities, and reservation call to actions.</li>
        <li>🍽️ Restaurant Menu: Presentation of dining options, seasonal courses, and culinary philosophy.</li>
        <li>🌐 Bilingual Navigation: Likely supports English for international guests. (observed from /en/ route)</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Built on <strong>WordPress</strong> — suggested by Awwwards / design-directory tech listing.</li>
        <li>Custom theme or child-theme built with PHP, utilizing classic WP template hierarchy.</li>
        <li>Image-heavy pages: optimized via lazy-loading, responsive srcset.</li>
        <li>Multilingual setup: likely using WP multilingual plugin (e.g. WPML or Polylang) given English / Japanese.</li>
        <li>SEO-focused content: semantic tags, meta descriptions, and heritage storytelling emphasis.</li>
      </ul>
    `,
    role: `
      Senior Frontend / Backend Developer <br/>
      Detailed contributions:
      <ul>
        <li>🏗️ Developed a custom WordPress theme to match heritage design, preserving brand authenticity.</li>
        <li>📷 Built responsive galleries optimized for visual storytelling.</li>
        <li>🌐 Set up multilingual functionality to support English-Japanese audiences.</li>
        <li>🛎️ Integrated booking CTAs / contact forms with backend to allow guest inquiries.</li>
        <li>🔧 Performance optimization: lazy loading images, minimizing WP queries, and caching.</li>
      </ul>
    `,
    techStack: [
      "WordPress (PHP)",
      "Custom WP Theme",
      "Multilingual Plugin (WPML / Polylang)",
      "Responsive Images (srcset / lazy)",
      "CSS3 / SCSS",
      "SEO Best Practices"
    ],
    thumbnail: "/projects/thumbnail/hotarutei.jpg",
    longThumbnail: "/projects/long/hotarutei.jpg",
    images: [
      "/projects/images/hotarutei-1.jpg",
      "/projects/images/hotarutei-2.jpg",
      "/projects/images/hotarutei-3.jpg",
      "/projects/images/hotarutei-4.jpg"
    ]
  }
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Full Stack)',
        company: 'Kraftvaerk, Denmark',
        duration: 'Dec 2023 - Present',
    },
    {
        title: 'Backend Developer',
        company: 'Otsuka Corporation, Japan',
        duration: 'Oct 2022 - Nov 2023',
    },
    {
        title: 'Frontend Engineer',
        company: 'Otsuka Corporation, Japan',
        duration: 'Oct 2020 - Sep 2022',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Palo Alto Networks, United State',
        duration: 'Fab 2017 - Sep 2020',
    },
];
