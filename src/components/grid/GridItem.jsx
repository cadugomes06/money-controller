import React from 'react';
import styles from './Grid.module.css';
import { FaRegArrowAltCircleUp,
   FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
  return (
    <div className={styles.table}>

      <div>{item.desc}</div>
      <div>{item.amount}</div>
      <div>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" /> 
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </div>      
        <FaTrash onClick={() => onDelete(item.id)} />
    </div>
  )
}

export default GridItem