import Container from "@/components/Container/Container";
import Layout from "@/components/layout/Layout";
import Block from "@/components/ui/Block/Block";
import Button from "@/components/ui/Button/Button";
import s from "@/assets/styles/Home.module.scss";
import Link from "next/link";
import link from "@/assets/images/link.svg";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Block className={s.mainBlock}>
          <p>все предложения</p>
          <h1>Корпоративные системы</h1>
          <Button className={s.mainBlock__btn}>Скачать бриф</Button>
        </Block>
        <Block className={s.newsBlock}>
          <p>Следите за нашими новостями</p>
          <h2>Перейти к новостям</h2>
          <Link href="/notFound">
            <Image src={link} alt="ссылка" />
          </Link>
        </Block>
        <Block className={s.awardBlock}>
          <p>Вгляните на наши достижения</p>
          <h2>Награды</h2>
          <Link href="/notFound">
            <Image src={link} alt="ссылка" />
          </Link>
        </Block>
        <Block className={s.formBlock}>
          <p>Хотите заказать прямо сейчас?</p>
          <h2>Оформить</h2>
          <Link href="/notFound">
            <Image src={link} alt="ссылка" />
          </Link>
        </Block>
      </Container>
    </Layout>
  );
}
