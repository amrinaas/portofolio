/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Amrina Aulia",
  title: "Hi all, I'm Amrina",
  subTitle: emoji(
    "A passionate Front End Developer 🚀  Learning Enthusiast, having an experience of designing and building Web with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1nOTHHFv1leoP6mkPJWlVNshWR8mZI5vFnlITqHoUc4s/edit",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amrinaas",
  linkedin: "https://www.linkedin.com/in/amrinaas/",
  gmail: "amrinaas96@gmail.com",
  gitlab: "https://gitlab.com/amrinaas96",
  facebook: "https://www.facebook.com/amrinaauliasiregar",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/amrinaas/",
  twitter: "https://twitter.com/amrinaas/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn",
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database",
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire",
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Glints Academy Batch 10",
      logo: require("./assets/images/glints.png"),
      // subHeader: "Master of Science in Computer Science",
      duration: "December 2020 - March 2021",
      desc: "Coding Bootcamp.",
      descBullets: ["Front End Developer"],
    },
    {
      schoolName: "University State of Padang",
      logo: require("./assets/images/unp.png"),
      subHeader: "Bachelor of Engineering",
      duration: "August 2014 - December 2018",
      desc: "Mining Engineering",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
  display: true,
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%",
    // },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "90%",
    // },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Education Consultant",
      company: "Ruangguru",
      companylogo: require("./assets/images/ruangguru.png"),
      date: "August 2019 – December 2020",
      desc:
        "Visit schools and socialize an effective learning method with technology.",
      // descBullets: [
      //   "Custom building applications",
      //   "Coaching",
      //   "Streaming live on YouTube",
      //   "Creating tutorials",
      // ],
    },
    {
      role: "Intern Student",
      company: "PT. Mandala Karya Prima",
      companylogo: require("./assets/images/mkp.png"),
      date: "February 2018 – April 2018",
      desc:
        "Make a report about excavator productivity and production loss analysis.",
    },
    // {
    //   role: "Junior Information Security & Systems Representative",
    //   company: "Vodafone",
    //   companylogo: require("./assets/images/vodafoneLogo.png"),
    //   date: "November 2018 – July 2019",
    //   desc:
    //     "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "amrinaas", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "Project",
  projects: [
    {
      image: require("./assets/images/Logo.png"),
      projectName: "Sportsman",
      projectDesc:
        "Final project. Build a web for workout program. Work as a team with Back End Stack and React Native",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "fa",
      //   },
      //   //  you can add extra buttons here.
      // ],
    },
    {
      image: require("./assets/images/movie.png"),
      projectName: "MilanTV",
      projectDesc: "Mini Project. Build a web for Movie Reviews",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "",
      //   },
      // ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(62) 812 6685 0730",
  email_address: "amrinaas96@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "amrinaas", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
