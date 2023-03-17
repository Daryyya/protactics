import clsx from "clsx";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";
import Burger from "./Burger/Burger";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={clsx(s.header, "container")}>
      <div className={s.logo_wrap}>
        <Image src={logo} alt="лого" width={32} height={32} />
      </div>
      <nav className={s.menu_desktop}>
        <Menu />
      </nav>
      <Contact hiddenOn="mobile" />
      <Burger />
    </header>
  );
};

export default Header;
