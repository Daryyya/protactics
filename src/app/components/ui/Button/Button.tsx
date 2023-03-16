import clsx from "clsx";
import { FC, ButtonHTMLAttributes } from "react";
import s from "./Button.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({
  children,
  type = "button",
  className,
  ...restProps
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...restProps} type={type} className={clsx(s.button, className)}>
      {children}
    </button>
  );
};

export default Button;
