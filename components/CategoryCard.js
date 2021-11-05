import styles from "../styles/CategoryCard.module.css";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={700} width={1300} />
      <Link href={`/MainCategory/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;
