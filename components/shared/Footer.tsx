import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex flex-center wrapper flex-col text-center p-5 gap-4 sm:flex-row">
        <Link href="/">
          <Image
            width={128}
            height={38}
            alt="logo"
            src="/assets/images/logo.svg"
          />
        </Link>
        <p>&copy; {currentYear} Olatoy Evently. All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
