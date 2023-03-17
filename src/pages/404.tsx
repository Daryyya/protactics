import React from "react";
import s from "@/assets/styles/NotFound.module.scss";
import Link from "next/link";

const Page404 = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404 Not Found</h1>
      <Link href="/">Назад</Link>
    </div>
  );
};

export default Page404;
