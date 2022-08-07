import React from 'react'
import styles from './Resume.module.css'
import ResumeItem from './ResumeItem'
import { FaRegArrowAltCircleUp, BsArrowUpCircleFill,
  FaRegArrowAltCircleDown } from 'react-icons/bs';

const Resume = ({income, expense, total, color}) => {
  return (
    <div className={styles.container}>
        <ResumeItem
         title='Entradas' 
         color="green"
        value={income}
           />
        <ResumeItem title="Saídas"
        color="red"
          value={expense}
             />
      <ResumeItem 
      color="teal"
      title="Total"
       value={total}
        />
        </div>
  )
}

export default Resume