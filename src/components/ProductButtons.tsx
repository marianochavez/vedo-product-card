import React from 'react'
import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

  const { counter, increaseBy, maxQuantity } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxQuantity && counter === maxQuantity,
    [counter, maxQuantity],
  )
  

  return (
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button 
        className={
          `${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`
        } 
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};