import Container from "@/components/ui/Container/Container";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button/Button";
import s from "@/assets/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import CardLink from "@/components/ui/CardLink/CardLink";
import Card from "@/components/ui/Card/Card";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Card className={s.mainBlock}>
          <div>
            <p>все предложения</p>
            <h1>Корпоративные системы</h1>
          </div>
          <Link href="assets/files/test.pdf" download="test.pdf" target="_blank">
            Скачать бриф
          </Link>
        </Card>
        <CardLink
          text="Следите за нашими новостями"
          title="Перейти к новостям"
          className={s.newsCard}
        />
        <CardLink
          text="Вгляните на наши достижения"
          title="Награды"
          className={s.awardCard}
        />
        <CardLink
          text="Хотите заказать прямо сейчас?"
          title="Оформить"
          className={s.formCard}
        />
      </Container>
    </Layout>
  );
}
