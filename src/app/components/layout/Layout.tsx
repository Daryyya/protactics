import React, { FC, ReactNode } from "react";
import { Manrope } from "next/font/google";
import Header from "../ui/Header/Header";

const font = Manrope({
  variable: "--main-font",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
});

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={font.className}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
