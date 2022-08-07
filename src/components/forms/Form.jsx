import React, { useState } from 'react'
import styles from './Form.module.css'
import Grid from '../grid/Grid'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [isExpense, setExpense] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000);

 const handleSave = () => {
    if (!desc || !amount) {
        alert('Informe a descrição e o valor')
        return;
    } else if (amount < 1) {
        alert('O valor tem que ser positivo!')
        return;
    }
    
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense
     };

     handleAdd(transaction)
     setDesc("");
     setAmount("")
    
    }   
    

  return (
    <>
   <div className={styles.container}>
        <div className={styles.inputContent}>
            <label>Produto/Serviço</label>
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
             onChange={({target}) => setExpense(!isExpense)}
            />
              <label htmlFor='sai' className={styles.label}>Saída</label>
            <input className={styles.inputRadio}
            type="radio"
            id='sai'
            name='grupo1'
             onChange={({target}) => setExpense(target.value)}
             />
        </div>

        <button className={styles.btn} onClick={handleSave} >
        Adicionar
        </button>
   </div>    
    <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form