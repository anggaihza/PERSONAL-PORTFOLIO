import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://wa.me/085860654098"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/asep-angga-ihza-sukarya-46318215b"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/anggaihza"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.instagram.com/angga_asep17/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://web.facebook.com/angga.asep1"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
