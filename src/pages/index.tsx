import Container from "@/components/ui/Container/Container";
import Layout from "@/components/layout/Layout";
import s from "@/assets/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import CardLink from "@/components/ui/CardLink/CardLink";
import Card from "@/components/ui/Card/Card";
import download from "@/assets/images/download.svg";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Card className={s.main_block}>
          <div>
            <p className={s.subtitle}>все предложения</p>
            <h1 className={s.title}>Корпоративные системы</h1>
          </div>
          <Link
            className={s.link}
            href="/files/test.pdf"
            download="test.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.link__text}>
              <span className={s.link__subtitle}>Создание проекта</span>
              <span>Скачать бриф</span>
            </span>
            <span className={s.link__img_wrap}>
              <Image src={download} alt="скачать" width={30} height={22} />
            </span>
          </Link>
        </Card>
        <CardLink
          text="Следите за нашими новостями"
          title="Перейти к новостям"
          className={s.news_card}
          link="news"
        />
        <CardLink
          text="Вгляните на наши достижения"
          title="Награды"
          className={s.awards_card}
          link="awards"
        />
        <CardLink
          text="Хотите заказать прямо сейчас?"
          title="Оформить"
          className={s.form_card}
          link="form"
        />
      </Container>
    </Layout>
  );
}
