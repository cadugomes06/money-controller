import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [expense, setExpense] = useState(false)

 const handleSave = () => {
    if (!desc || !amount) {
        alert('Informe a descrição e o valor')
        return;
    } else if (amount < 1) {
        alert('O valor tem que ser positivo!')
        return;
    }
 }   

  return (
    <>
   <div className={styles.container}>
        <div className={styles.inputContent}>
            <label>Descrição</label>
            <input className={styles.input}
            type="text"
            value={desc}
            onChange={({target}) => setDesc(target.value)}
            />
        </div>
        <div className={styles.inputContent}>
        <label>Valor R$</label>
            <input className={styles.input}
            type="number"
             value={amount} 
             onChange={({target}) => setAmount(target.value)}
            />
        </div>

        <div className={styles.radioArea}>
        <label htmlFor='entra' className={styles.label}>Entrada</label>
            <input className={styles.inputRadio} 
            type="radio"
            id='entra'
            name='grupo1'
            defaultChecked
             value={expense} 
             onChange={({target}) => setExpense(target.value)}
            />
              <label htmlFor='sai' className={styles.label}>Saída</label>
            <input className={styles.inputRadio}
            type="radio"
            id='sai'
            name='grupo1'
             value={expense} 
             onChange={({target}) => setExpense(target.value)}
             />
        </div>

        <button className={styles.btn} >
        Adicionar
        </button>
   </div>    
    </>
  )
}

export default Form