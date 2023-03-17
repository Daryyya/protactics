import React from "react";
import Link from "next/link";
import s from "./Menu.module.scss";

interface MenuLink {
  title: string;
  href: string;
}
const linksList: MenuLink[] = [
  { title: "Главная", href: "/" },
  { title: "Реализованные проекты", href: "/projects" },
  { title: "Контакты", href: "/contacts" },
  { title: "Услуги", href: "/services" },
];

const Menu = () => {
  return (
    <ul className={s.menu}>
      {linksList.map(({ title, href }) => (
        <li key={href}>
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
