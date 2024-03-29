﻿// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Habiba Akhter",
  title: "Hi all, I'm Habiba",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1u_QeBioPvWAUz1MwK2PK2S2oumjdLaeg/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/habiba2012",
  linkedin: "https://www.linkedin.com/in/habiba-akhter-2884ba26/",
  gmail: "habibaakhter2012@gmail.com",
  medium: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vue"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Conscious Sweater",
      companylogo: require("./assets/images/conscious-sweater-logo.png"),
      date: "September 2020 – Present",
      desc:
        "Full-stack development of a platform for mapping out sustainable fashion shops around the world.",
      descBullets: [
        "",
      /*   "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials" */
      ]
    },
    {
      role: "Frontend Developer (Angular 2)",
      company: "Rithos",
      companylogo: require("./assets/images/rithos-logo.png"),
      date: "April 18 – May 2020",
      desc:
        "Front end developer with focus on AngularJS."
    },
    {
      role: "Frontend Developer",
      company: "Just Brand International",
      companylogo: require("./assets/images/justBranding-logo.png"),
      date: "Jan 2017 – March 2018",
      desc:
        "E-commerce Website building (WordPress, WooCommerce)"
    }
  ]
};



const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "habiba2012", 
  showGithubProfile: "true", 
};



const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/cs-project-img.png"),
      projectName: "Sustainable fashion shops ",
      projectDesc: "React js, python, django rest framework",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        },
        {
          name: "Source Code",
          url: "https://github.com/habiba2012/react-django-googleMap-internshipProject"
        }
      ]
    },
    {
      image: require("./assets/images/ecom.png"),
      projectName: "E-commerce Website ",
      projectDesc: "React js, react hook, context api, react cart",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quirky-bhaskara-078592.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/habiba2012/Ecommerce-react/tree/master"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/covid.png"),
      projectName: "Covid Tracker Website",
      projectDesc: "JavaScript, Html5, Css3",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://habiba2012.github.io/covid_traker/"
        },
        {
          name: "Source Code",
          url: "https://github.com/habiba2012/covid_traker"
        }
        //  you can add extra buttons here.
      ]
    },
  
    /* {
      image: require("./assets/images/qruise-site-img.png"),
      projectName: "Cruise Ship Booking",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://habiba2012.github.io/ticketBooking-website-javaScript/"
        }
      ]
    } */
  ],
  display: true // Set false to hide this section, defaults to true
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
        "First Bangladeshi to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: (""),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: (""),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifications from SMIT for PWA Web App Development",
      image:"",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+45 91676305",
  email_address: "habibaakhter2012@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo
};
