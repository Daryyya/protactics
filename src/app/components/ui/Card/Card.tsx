import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import s from "./Card.module.scss";

interface Props {
  className: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ children, className }) => {
  return <div className={clsx(className, s.card)}>{children}</div>;
};

export default Card;
