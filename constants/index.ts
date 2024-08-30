import Link from "next/link";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { AiOutlineMail } from 'react-icons/ai';

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/linkedIn.svg",
    link: "https://www.linkedin.com/in/abhishekgiri013/", // Replace with your Discord profile URL
  },
  {
    name: "Facebook",
    src: "/github.svg",
    link: "https://github.com/abhishekgiri013", // Replace with your Facebook profile URL
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://instagram.com/your-instagram-profile", // Replace with your Instagram profile URL
  },
];

export const Projects = [
  {
    title: "NextCommerce",
    text: "its a ecommerce website developed in nextjs",
    src: "/pro1.png",
    Link: "http://localhost:3000",
  },
  {
    title: "",
    text: "",
    src: "/SpaceWebsite.png",
    Link: "http://localhost:3000",
  },
  {
    title: "",
    text: "",
    src: "/WebPortfolio.png",
    Link: "http://localhost:3000",
  },
  {
    title: "Matrix themed Website",
    text: "",
    src: "/Matrix.png",
    Link: "http://localhost:3000",
  },
  {
    title: "Matrix themed Website",
    text: "",
    src: "/Matrix.png",
    Link: "http://localhost:3000",
  },
  
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/about-me",
  },
  {
    name: "/contact-me",
    icon: AiOutlineMail,
    link: "/contact-me",
  },
];