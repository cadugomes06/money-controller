import React from 'react'
import styles from './Resume.module.css'
import ResumeItem from './ResumeItem'

const Resume = ({income, expense, total}) => {
  return (
    <div className={styles.container}>
        <ResumeItem title="Entradas" value={income} />
        <ResumeItem title="Saídas" value={expense} />
      <ResumeItem title="Total" value={total} />
        </div>
  )
}

export default Resume