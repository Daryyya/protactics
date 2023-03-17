import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import s from "./Conteiner.module.scss";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={clsx("container", s.gridWrap)}>{children}</div>;
};

export default Container;
