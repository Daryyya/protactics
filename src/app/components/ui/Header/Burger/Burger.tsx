import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";
import s from "./Burger.module.scss";

const Burger = () => {
  return (
    <nav className={s.burger}>
      <input className={s.burger__check} type="checkbox" />
      <span className={s.burger__lines} />
      <ul className={s.burger__list}>
        <Contact hiddenOn="desktop" />
        <Menu />
      </ul>
    </nav>
  );
};

export default Burger;
