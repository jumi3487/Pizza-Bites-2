import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/tomato-box.png'} alt="tomato box" width={110} height={132} />
        <h3 className={styles.textItem}>1 <br/> Tomato </h3>
      </div>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/shrimp-box.png'} alt="shrimp box" width={110} height={132} />
        <h3 className={styles.textItem}>2 <br/> Shrimp </h3>
      </div>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/pineapple-box.png'} alt="pineapple box" width={110} height={132} />
        <h3 className={styles.textItem}>4 <br/> Pineapple </h3>
      </div>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/olive-box.png'} alt="olive box" width={110} height={132}/>
        <h3 className={styles.textItem}>8 <br/> Olive </h3>
      </div>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/mushroom-box.png'} alt="mushroom box" width={110} height={132} />
        <h3 className={styles.textItem}>16 <br/> Mushroom </h3>
      </div>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/ham-box.png'} alt="ham box" width={110} height={132} />
        <h3 className={styles.textItem}>32 <br/> Ham </h3>
      </div>
      <div className={styles.boxInfo}>
        <Image className={styles.boxItem} src={'/images/basil-box.png'} alt="basil box" width={110} height={132} />
        <h3 className={styles.textItem}>64 <br/> Basil </h3>
      </div>
    </div>
  );
}
