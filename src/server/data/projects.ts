import { type Project, ProjectTypes, Tags } from '@/types/index';

const basePath: string = `/images/projects`;

const projects: Project[] = [
  {
    id: 1,
    metaData: {
      title: 'Newmarket Holidays',
      description: 'A high-level breakdown of the Newmarket Holidays development project.'
    },
    slug: 'newmarket-holidays',
    title: 'Newmarket Holidays',
    type: ProjectTypes.Development,
    summary:
      'A new end-to-end system built around a centralised headless content management system, alongside a powerful suite of automation API endpoints and dashboards. Allowing for improved back-office and content management, automated and optimised workflows and less maintenance.',
    tileImage: {
      src: `${basePath}/newmarket/tile-image.png`,
      altText: 'Newmarket holidays logo',
      width: 1000,
      height: 428
    },
    image: {
      src: `${basePath}/newmarket/template-1.jpg`,
      altText: '',
      width: 2000,
      height: 1125
    },
    tags: [Tags.UMBRACO_CMS, Tags.NUXT3, Tags.VUE, Tags.TYPESCRIPT, Tags.AZURE, Tags.SCSS_CSS],
    components: [
      {
        content: [
          '<p><span class="h1">Newmarket Holidays is one of UK&#39;s largest independently owned specialist escorted tour operators.</span></p>',
          '<p>When I started my journey with Newmarket Holidays the company was at a point in its lifecycle where it was time for a complete branding and technology refresh. I joined a small team and together we would be tasked with designing, architecting and implementing a completely new end-to-end system all powered via a centralised content management system. My initial responsibility was to design, wireframe and build the front-end interfaces ensuring that any new feature adhered to business guidelines, although this would quickly evolve to me playing a prominent full-stack role.</p>'
        ],
        images: [
          {
            src: `${basePath}/newmarket/template-4.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">Passing of the mantle</span></h2>',
          '<p>It was not long into the project and for a variety of reasons (including the pandemic) that we would see our team drastically reduce. It would become my responsibility to solely manage and maintain the full system from this point forward. This would include not only maintaining the front-end but I would now be tasked with implementing end-to-end solutions ranging from new features, DevOps, database augmentations (EF code-first migrations), API integrations, automation and much more.</p>'
        ],
        images: [
          {
            src: `${basePath}/newmarket/template-2.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          },
          {
            src: `${basePath}/newmarket/template-3.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">Features</span></h2>',
          '<p>Due to the size of the system, it is honestly hard to cover every project or feature I worked on over the last 4+ years. From feature updates and booking system augmentations, automation and API management to implementing a full net promoter score solution with reporting, I have worked on just about every aspect of the system.</p>'
        ],
        images: [
          {
            src: `${basePath}/newmarket/template-5.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          },
          {
            src: `${basePath}/newmarket/template-6.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          '<p>A new end-to-end system built around a centralised headless content management system (Umbraco 13), alongside a powerful suite of automation API endpoints and dashboards. The front-end is built using Nuxt 3, allowing for improved back-office and content management, automated and optimised workflows and less maintenance.</p>'
        ],
        link: {
          name: 'View the site',
          url: 'https://www.newmarketholidays.co.uk',
          target: '_black'
        }
      }
    ]
  },
  {
    id: 2,
    metaData: {
      title: 'Newmarket Holidays v1.0',
      description: 'A high-level breakdown of the Newmarket Holidays v1.0 development project.'
    },
    slug: 'newmarket-holidays-v1',
    title: 'Newmarket Holidays v1.0',
    type: ProjectTypes.Development,
    summary:
      'A complete branding refresh, in addition, to a complete site rebuild and integration directly into the primary environment. Allowing for improved content management, optimised page speeds, less maintenance and overall an improved company workflow.',
    tileImage: {
      src: `${basePath}/newmarket-holidays-v1/tile-image.png`,
      altText: 'Newmarket Holidays v1.0 logo',
      width: 1000,
      height: 428
    },
    image: {
      src: `${basePath}/newmarket-v1/template-1.jpg`,
      altText: '',
      width: 2000,
      height: 1125
    },
    tags: [Tags.UMBRACO_CMS, Tags.ANGULAR_JS, Tags.AZURE, Tags.BOOTSTRAP, Tags.JAVASCRIPT_JQUERY, Tags.SCSS_CSS],
    components: [
      {
        content: [
          '<p><span class="h1">Newmarket Holidays is one of UK&#39;s largest independently owned specialist escorted tour operators.</span></p>',
          '<p>The initial version of the Newmarket Holidays platform was built on Umbraco 8 with an Angular front-end. This project required a complete system redesign to accommodate modern web standards and improve the overall user experience.</p>'
        ],
        images: [
          {
            src: `${basePath}/newmarket-v1/template-3.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">Comprehensive Platform Development</span></h2>',
          "<p>Working with Umbraco 8 and Angular, I helped to create a system that would serve as the foundation for Newmarket Holidays' digital presence. The project involved extensive development of both back-end and front-end systems, ensuring seamless integration between the CMS and the user-facing elements of the website.</p>"
        ],
        images: [
          {
            src: `${basePath}/newmarket-v1/template-2.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">Content Management and User Experience</span></h2>',
          '<p>The Umbraco 8 implementation provided a robust content management experience for the team, allowing for easy updates and maintenance. The Angular front-end delivered a responsive and interactive user experience, creating an engaging platform for customers to explore and book holidays.</p>',
          '<p>This version of the platform served as the stepping stone to the more advanced implementation that would follow, laying important groundwork for future development.</p>'
        ]
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          '<p>A complete branding refresh, in addition to a complete site rebuild utilizing Umbraco 8 and Angular. This implementation allowed for improved content management, optimised page speeds, less maintenance and overall an improved company workflow.</p>'
        ],
        link: {
          name: 'View the site',
          url: 'https://agents2.newmarketholidays.co.uk/',
          target: '_black'
        }
      }
    ]
  },
  {
    id: 3,
    metaData: {
      title: 'Tesas Cleaning Service',
      description: 'A high-level breakdown of the Tesas Cleaning Service development project.'
    },
    slug: 'tesas-cleaning-service',
    title: 'Tesas Cleaning Service',
    type: ProjectTypes.Development,
    summary:
      'A complete company brand, plus a simple-to-use static website built with Nuxt 3, allowing for adaptive online growth at the same pace as business growth.',
    tileImage: {
      src: `${basePath}/tesas/tile-image.png`,
      altText: 'Tesas cleaning service logo',
      width: 1000,
      height: 428
    },
    image: {
      src: `${basePath}/tesas/template-4.jpg`,
      altText: '',
      width: 2000,
      height: 1125
    },
    tags: [Tags.GRAPHIC_DESIGN, Tags.NUXT3, Tags.VUE, Tags.TYPESCRIPT, Tags.SCSS_CSS],
    components: [
      {
        content: [
          '<p><span class="h1">Tesas Cleaning Service is an independently owned company offering a multitude of both domestic and commercial cleaning services.</span></p>',
          '<p>The company was just starting and had no digital or design presence, a clean slate. But they needed a professional to help them create the building blocks for their company identity along with a simple, affordable, and robust website that can give them the flexibility to grow online at the same pace that their business grows.</p>',
          '<p>With this information in mind, I started to examine and research existing companies in the same sector trying to get an initial feel for branding values and direction. We wanted it to be simple, clean, and trustworthy but still reflect the core identity of the company and the owner himself. The outcome was a minimalist colour pallet, plain midtones and white space, complimented by a bold primary and secondary colour to be used sparingly to have better control over CTAs or promotions. The logo was designed to be uncomplicated, free from distractions such as icons or design features, leaving the emphasis on the name of the business only. The thought process behind this was to improve readability for signage such as vehicle vinyl or adverts.</p>'
        ],
        images: [
          {
            src: `${basePath}/tesas/template-2.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">The static website approach</span></h2>',
          "<p>The online requirements were pretty straightforward, a website that was clean, spacious and that provided quick, concise information about services and pricing. Given the company's early stage, we opted for a simple, static website built with Nuxt 3. This modern approach provided excellent performance and simplified hosting while still allowing for future growth. The static site generation capabilities of Nuxt 3 ensured fast load times and strong SEO fundamentals right from the start.</p>"
        ],
        images: [
          {
            src: `${basePath}/tesas/template-5.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          },
          {
            src: `${basePath}/tesas/template-6.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          '<p>A complete company brand, plus a simple-to-use static website built with Nuxt 3, allowing for adaptive online growth at the same pace as business growth.</p>'
        ]
      }
    ]
  },
  {
    id: 4,
    metaData: {
      title: 'Annas Blooms',
      description: 'A high-level breakdown of the Annas Blooms e-commerce platform.'
    },
    slug: 'annas-blooms',
    title: 'Annas Blooms',
    type: ProjectTypes.Development,
    summary:
      'A modern e-commerce platform built with WordPress headless CMS and Nuxt 3, offering a seamless shopping experience for customers and comprehensive management tools for the business.',
    tileImage: {
      src: `${basePath}/annas-blooms/tile-image.png`,
      altText: 'Annas Blooms logo',
      width: 1000,
      height: 428
    },
    image: {
      src: `${basePath}/annas-blooms/template-3.jpg`,
      altText: '',
      width: 2000,
      height: 1125
    },
    tags: [Tags.GRAPHQL, Tags.NUXT3, Tags.VUE, Tags.TYPESCRIPT, Tags.SCSS_CSS],
    components: [
      {
        content: [
          '<p><span class="h1">Annas Blooms is a boutique floral business specializing in unique flower arrangements and gifts.</span></p>',
          '<p>The business required a comprehensive e-commerce solution that would showcase their products beautifully while providing a seamless shopping experience. Leveraging WordPress as a headless CMS with a Nuxt 3 front-end offered the perfect balance of content management capabilities and modern front-end performance.</p>'
        ],
        images: [
          {
            src: `${basePath}/annas-blooms/template-2.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          },
          {
            src: `${basePath}/annas-blooms/template-5.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">E-commerce functionality</span></h2>',
          '<p>The platform includes comprehensive e-commerce capabilities including product browsing, shopping cart, secure checkout, order management, and customer accounts. The headless architecture allows for a highly optimized shopping experience while maintaining the ease of WordPress content management for the business owners.</p>'
        ],
        images: [
          {
            src: `${basePath}/annas-blooms/template-7.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          },
          {
            src: `${basePath}/annas-blooms/template-6.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          '<p>A modern, high-performance e-commerce platform powered by WordPress headless CMS and Nuxt 3, delivering a beautiful shopping experience for customers and comprehensive management tools for the business.</p>'
        ],
        link: {
          name: 'View the site',
          url: 'https://annasblooms.com',
          target: '_black'
        }
      }
    ]
  },
  {
    id: 5,
    metaData: {
      title: 'Weather App',
      description: 'A simple weather application that tells you if you need an umbrella.'
    },
    slug: 'weather-app',
    title: 'Weather App',
    type: ProjectTypes.Development,
    summary:
      'One of my first React projects - a simple, practical weather application that tells you whether you need to take an umbrella with you based on current weather conditions.',
    tileImage: {
      src: `${basePath}/weather-app/tile-image.png`,
      altText: 'Weather App logo',
      width: 1000,
      height: 428
    },
    image: {
      src: `${basePath}/weather-app/template-1.jpg`,
      altText: '',
      width: 2000,
      height: 1125
    },
    tags: [Tags.REACT, Tags.TYPESCRIPT, Tags.SCSS_CSS],
    components: [
      {
        content: [
          '<p><span class="h1">The Weather App was one of my first projects built with React.</span></p>',
          '<p>This simple application was designed with practicality in mind, answering the most common weather-related question: "Do I need an umbrella today?" By accessing weather APIs and providing straightforward results, the app eliminates the need to interpret complex weather data.</p>'
        ],
        images: [
          {
            src: `${basePath}/weather-app/template-2.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">React learning journey</span></h2>',
          "<p>As one of my first React projects, this application represents an important step in my development journey. It incorporates fundamental React concepts like component structure, state management, and API integration. While simple in concept, it provided valuable hands-on experience with React's approach to building interactive web applications.</p>"
        ],
        images: [
          {
            src: `${basePath}/weather-app/template-3.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          },
          {
            src: `${basePath}/weather-app/template-4.jpg`,
            altText: '',
            width: 2000,
            height: 1125
          }
        ]
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          '<p>A straightforward, user-friendly weather application built with React that quickly tells users whether they need to take an umbrella with them based on current weather conditions.</p>'
        ]
      }
    ]
  }
];

export default projects;
