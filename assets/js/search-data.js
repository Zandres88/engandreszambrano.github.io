// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/engandreszambrano.github.io/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/engandreszambrano.github.io/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Professional CyberLab Projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/engandreszambrano.github.io/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/engandreszambrano.github.io/books/the_godfather/";
            },},{id: "projects-information-security-standards-and-frameworks",
          title: 'Information Security Standards and Frameworks',
          description: "This project is based on the research and presentation of the most relevant information security frameworks and policies applied within a business environment. It highlights essential standards such as NIST, ISO/IEC, and COBIT, offering a structured overview of their roles in managing cyber risks and strengthening organizational security posture.",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/1_project/";
            },},{id: "projects-elastic-siem-lab-a-practical-guide-to-security-monitoring-with-the-elastic-stack-and-kibana",
          title: 'Elastic SIEM Lab - A Practical Guide to Security Monitoring with the Elastic...',
          description: "A step-by-step lab for deploying Elastic SIEM using Kali Linux and Windows clients. Includes log integration, detection rules, and real-time dashboards with Kibana for security monitoring and analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/2_project/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/6_project/";
            },},{id: "projects-dns-script-with-ai-dns-auditing-via-prompt-engineering-and-shodan-api",
          title: 'DNS Script with AI DNS Auditing via Prompt Engineering and Shodan API',
          description: "A Python-based DNS auditing tool developed using prompt engineering with ChatGPT and the Shodan API. Designed for academic purposes, it runs in a secure virtual environment and demonstrates the use of AI in cybersecurity automation.",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/engandreszambrano.github.io/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%61%6E%64%72%65%73_%38%38@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/engandreszambrano", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
