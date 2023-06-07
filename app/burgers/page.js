import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/burgers.module.css";

const getBurgers = async () => {
  const response = await fetch("http://localhost:5000/items");
  return await response.json();
};

export default async function AllBurgersPage() {
  const data = await getBurgers();

  return (
    <div>
      <h1>Our Burgers</h1>
      {data?.map(({ id, name, desc, image, price }) => (
        <Link href={`/burgers/${id}`} key={id} className={styles.burgerCard}>
          <div className={styles.imageContainer}>
            <Image
              src={`${image}`}
              alt={`${name}`}
              width={120}
              height={120}
              priority={true}
            />
          </div>
          <div>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
