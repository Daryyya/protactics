import { FC } from "react";
import clsx from "clsx";
import Button from "@/components/ui/Button/Button";
import s from "./Contact.module.scss";

interface Props {
  hiddenOn: "desktop" | "mobile";
}

const Contact: FC<Props> = ({ hiddenOn }) => {
  return (
    <div
      className={clsx(
        s.contact,
        hiddenOn === "desktop" ? s.contact_mobile : s.contact_desktop,
      )}
    >
      <a className={s.contact__link} href="tel:89841402670">
        Позвонить
      </a>
      <Button className={s.contact__btn}>Обсудить проект</Button>
    </div>
  );
};

export default Contact;
