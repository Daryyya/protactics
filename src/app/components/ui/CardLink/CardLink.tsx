import Image from "next/image";
import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import linkIcon from "@/assets/images/link.svg";
import Card from "../Card/Card";
import s from "./CardLink.module.scss";

interface Props {
  text: string;
  title: string;
  className: string;
  link: string;
}

const CardLink: FC<Props> = ({
  text, title, className, link,
}) => {
  return (
    <Card className={clsx(s.card, className)}>
      <p>{text}</p>
      <h2>{title}</h2>
      <Link href={`/${link}`}>
        <Image src={linkIcon} alt="ссылка" />
      </Link>
    </Card>
  );
};

export default CardLink;
