import React from 'react'
import styles from './ResumeItem.module.css'
import { FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa';

const ResumeItem = ({title, value, color, icon}) => {
  return (
    <div className={styles.container}>

        <div className={styles.divValores}>
       <h1 className={styles.title} style={{color: color}}>{title}</h1>
        {FaRegArrowAltCircleUp}
        </div>
        
        <span className={styles.span}>
        {value}
        </span>       

    </div>
  )
}

export default ResumeItem