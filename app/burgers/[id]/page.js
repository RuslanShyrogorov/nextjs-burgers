import Image from "next/image";
import styles from "../../../styles/burgers.module.css";

const getBurger = async (id) => {
  const response = await fetch(`http://localhost:5000/items/${id}`);
  return await response.json();
};

export async function generateMetadata(context) {
  const id = context.params.id;
  const data = await getBurger(id);
  const { name } = data;

  return {
    title: name,
  };
}

export default async function Details(context) {
  const id = context.params.id;

  const { name, image, desc, price } = await getBurger(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.singleBurger}>{name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${image}`}
          alt={`${name}`}
          width={200}
          height={200}
          priority
        />
      </div>
      <div>
        <p>Price: {price}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
