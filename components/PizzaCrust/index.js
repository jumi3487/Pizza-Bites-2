import styles from '@/components/PizzaCrust/PizzaCrust.module.css';
import Image from 'next/image';

export default function PizzaCrust() {
  return (
    <div className={styles.pizzaContainer}>
      <div>
        <Image className={styles.pizzaItem} src={'/images/pizzacrust.png'} alt="pizza box" width={390}height={390} />
      </div>
    </div>
      )
}