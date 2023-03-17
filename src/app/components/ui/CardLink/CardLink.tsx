import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Card from "../Card/Card";
import link from "@/assets/images/link.svg";
import s from "./CardLink.module.scss";
import clsx from "clsx";

interface Props {
  text: string;
  title: string;
  className: string;
}

const CardLink: FC<Props> = ({ text, title, className }) => {
  return (
    <Card className={clsx(className, s.card)}>
      <p>{text}</p>
      <h2>{title}</h2>
      <Link href="/notFound">
        <Image src={link} alt="ссылка" />
      </Link>
    </Card>
  );
};

export default CardLink;
