import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import s from "./Block.module.scss";

interface Props {
  className: string;
  children: ReactNode;
}

const Block: FC<Props> = ({ children, className }) => {
  return <div className={clsx(className, s.block)}>{children}</div>;
};

export default Block;
