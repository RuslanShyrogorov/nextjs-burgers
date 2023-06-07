// import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/home.module.css";
import Image from "next/image";

// export const metadata = {
//   title: "Burgers",
//   description: "Choose your burger",
// };

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>
        All Burgers
      </h1>
      <div className={styles.mainImage}>
        <Image
          src="/fatburger.png"
          alt="fat burger"
          width={400}
          height={300}
          priority={true}
        />
      </div>
      <p className={styles.text}>
        What is the perfect burger? Fresh lettuce leaf, soft buns, juicy meat.
        You can argue about other components of the filling, because this is a
        matter taste.
      </p>
      <p className={styles.text}>
        There are a couple of other factors that affect appetite: prices,
        quality service, good atmosphere.
      </p>
      <Link href="/burgers" className={styles.btn}>
        Choose your burger
      </Link>
    </div>
  );
}
