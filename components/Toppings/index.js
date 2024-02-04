import styles from './Toppings.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Toppings() {
  const toppings = {
    tomato: 1,
    shrimp: 2,
    pineapple: 4,
    olive: 8,
    mushroom: 16,
    ham: 32,
    basil: 64,
  };

  const chooseToppings = {
    1: <Image className={styles.toppingImageTomato} src={'/images/Tomato.png'} alt="Tomato Toppings" width="300" height="285" />,
    2: <Image className={styles.toppingImageShrimp} src={'/images/Shrimp.png'} alt="Shrimp Toppings" width="300" height="285" />,
    4: <Image className={styles.toppingImagePineapple} src={'/images/Pineapple.png'} alt="Pineapple Toppings" width="300" height="285" />,
    8: <Image className={styles.toppingImageOlive} src={'/images/Olive.png'} alt="Olive Toppings" width="300" height="285" />,
    16: <Image className={styles.toppingImageMushroom} src={'/images/Mushrooms.png'} alt="Mushroom Toppings" width="300" height="285" />,
    32: <Image className={styles.toppingImageHam} src={'/images/Ham.png'} alt="Ham Toppings" width="300" height="285" />,
    64: <Image className={styles.toppingImageBasil} src={'/images/Basil.png'} alt="Basil Toppings" width="300" height="285" />,
  };

  const [selectedToppings, setSelectedToppings] = useState(0);

  const handleInputChange = (value) => {
    setSelectedToppings(value);
  };

  return (
    <div className={styles.inputContainer}>
        <h2 className={styles.chooseYourTopping}>Choose Your Topping</h2>
          <input
            className={styles.input}
            id="input"
            type="text"
            placeholder="Enter topping value"
            onChange={(e) => handleInputChange(e.target.value)}
            value={selectedToppings || ''}
          />
        
      {/* Images */}
      <div className={styles.selectedToppings}>
        {Object.entries(chooseToppings).map(([toppingValue, toppingImage]) => (
          selectedToppings & parseInt(toppingValue) ? toppingImage : null
        ))}
      </div>
    </div>
  );
}
