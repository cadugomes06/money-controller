import React from 'react'
import styles from './Resume.module.css'
import ResumeItem from './ResumeItem'
import Form from './forms/Form'

const Resume = () => {
  return (
    <>
    <div className={styles.container}>
        <ResumeItem title="Entradas" value="1000" />
        <ResumeItem title="Saídas" value="1000" />
      <ResumeItem title="Total" value="1000" />

        </div>
        <Form />
        </>
  )
}

export default Resume