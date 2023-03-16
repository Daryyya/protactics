import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";
import Button from "../Button/Button";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={clsx(s.header, "container")}>
      <div className={s.header__wrapper}>
        <div className={s.logoWrap}>
          <Image src={logo} alt="лого" width={32} height={32} />
        </div>
        <nav className={s.menuWrap}>
          <ul className={s.header__menu}>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/">Реализованные проекты</Link>
            </li>
            <li>
              <Link href="/">Контакты</Link>
            </li>
            <li>
              <Link href="/">Услуги</Link>
            </li>
          </ul>
        </nav>
        <div className={s.contact}>
          <a className={s.contact__link} href="tel:89841402670">Позвонить</a>
          <Button className={s.contact__btn}>Обсудить проект</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
