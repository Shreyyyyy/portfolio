import Link from "next/link";

// Importing necessary icons
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMediumLine, 
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreyans-jain-9255351a7/", // Update this with your LinkedIn profile link
    Icon: RiLinkedinBoxLine,
  },
  {
    name: "Medium",
    link: "https://medium.com/@shreyans.jain_45335", // Update this with your Medium profile link
    Icon: RiMediumLine,
  },
  {
    name: "Github",
    link: "https://github.com/shreyyyyy", // Update this with your GitHub profile link
    Icon: RiGithubLine,
  }
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
