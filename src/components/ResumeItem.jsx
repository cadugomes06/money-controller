import React from 'react'
import styles from './ResumeItem.module.css'

const ResumeItem = ({title, value}) => {
  return (
    <div className={styles.container}>

        <div className={styles.divValores}>
       <h1 className={styles.title}>{title}</h1>
        </div>
        
        <span className={styles.span}>
        {value}
        </span>
       

    </div>
  )
}

export default ResumeItem