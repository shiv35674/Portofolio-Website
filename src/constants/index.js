import {
  mobile,
  backend,
  creator,
  web,
  firebase,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  sql,
  mysql,
  carrent,
  jobit,
  tripguide,
  vit,
  ihs,
  aequitas,
  face,
  bj,
  airbnb,
  brain,
  covid1
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Back-End Developer",
    icon: mobile,
  },
  {
    title: "Problem Solving",
    icon: backend,
  },
  {
    title: "Software Developement",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "SQLite",
    icon: mysql,
  },
  {
    name: "NodeJs",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  }
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Aequitas Victoria Foundation",
    icon: aequitas,
    iconBg: "#383E56",
    date: "September 2021 - March 2022",
    points: [
      "Work on main and other websites",
      "Manage affairs & coordinate with different teams of the Aequitas Victoria Foundation",
      "Give suggestions related to web development",
      "Develop a new website for our projects",
    ],
  }
];

const education = [
  {
    title: "Vellore Institute of Technology, Vellore",
    company_name: "B.Tech Computer Science and Engineering",
    icon: vit,
    iconBg: "#383E56",
    date: "August 2020 - Present",
    points: [
      "CGPA: 8.65 (Upto 5th Semester)",
      "Courseworks: Data Structures and Algorithms, Design and Analysis of Algorithms, Operating System, Database Management System, Network and Communications, Object-Oriented Programming",
    ],
  },
  {
    title: "The Indian High School Dubai, Dubai",
    company_name: "Class 12th, CBSE",
    icon: ihs,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Percentage: 93%",
      "Stream: Physics, Chemistry, Mathematics, Computer Science, English",
    ],
  },
  {
    title: "The Indian High School Dubai, Dubai",
    company_name: "Class 10th, CBSE",
    icon: ihs,
    iconBg: "#383E56",
    date: "2017 - 2018",
    points: [
      "Percentage: 92.2%",
      "Stream: Science and Maths",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was blown away by Shivam's technical skills and ability to work collaboratively on complex projects. His attention to detail and willingness to share his knowledge and expertise made him/her an invaluable member of our team. I look forward to working with Shivam again in the future.",
    name: "Saraswathi B",
    designation: "Student",
    company: "VIT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've had the pleasure of collaborating with Shivam on multiple occasions and have always been impressed with their professionalism and expertise. He has an eye for design and is able to bring even the most complex ideas to fruition.",
    name: "Arnav Srivastav",
    designation: "Student",
    company: "VIT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "As a computer science student, Shivam has a natural curiosity for learning and exploring new technologies. I have had the pleasure of watching him/her grow from a curious beginner to a confident and skilled developer. His passion for coding and problem-solving is truly inspiring",
    name: "Ashwin Lakhani",
    designation: "Student",
    company: "NSUT",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MediCare - DBMS Based Healthcare Portal",
    description:
      "An end to end Database focused portal for patient registration, organizing information and fixing appointments with healthcare professionals. Medical care website consists of three panels: Admin, Pharmacist and Patient.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Php",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shiv35674/iwpProject",
  },
  {
    name: "Face Anonymization System",
    description:
      "Anonymize face of an indiviual in a video to protect its privacy. Blurred face of an indiviual using Gaussian Blur Function and Haar Cascade classifier for face detection of an indiviual. Login and Sign up has also been included for Authentication.",
    tags: [
      {
        name: "Python(Flask)",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "SqlLite",
        color: "green-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://covid-19-tracker-72f63.web.app/",
  },
  {
    name: "Brain Tumor Detection",
    description:
      "Detection of Brain Tumor using Image Segmentation and Convolution Neural Networks. Updated and Enhanced the previous function for better performance, result and accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: brain,
    source_code_link: "https://github.com/shiv35674/Brain-Tumor-Detection",
  },
  {
    name: "Covid-19 Tracker",
    description:
      "Is a React-based website that keeps track of coronavirus cases across the world. Rapid API call to fetch data of coronavirus cases couuntry wise.",
    tags: [
      {
        name: "React Hooks",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: covid1,
    source_code_link: "https://covid-19-tracker-72f63.web.app/",
  },
  {
    name: "Airbnb Clone",
    description:
      "Is a clone of an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. Included Calendar Picker for selecting dates and Mapbox Integration to get location of the stay.",
    tags: [
      {
        name: "React Hooks",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/shiv35674/airbnb-clone",
  },
  {
    name: "BlackJack Game",
    description:
      "Blackjack is an enormously popular card game, with millions of fans playing it online across the globe. One of the main reasons for its popularity is that it’s so simple to play.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: bj,
    source_code_link: "https://blackjack-fawn.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, education };
