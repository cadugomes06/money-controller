import React from 'react'
import styles from './Grid.module.css'
import GridItem from './GridItem'

const Grid = ({ itens, setItens }) => {

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  return (
    <>
    <div className={styles.containerTipos}>
     
        <div ><span >Descrição</span></div>
         <div> <span >Valor</span></div> 
         <div><span >Tipo</span></div>
         <div><span ></span></div>
   
    </div>
    <div>
            {itens?.map((item, index) => (
           <GridItem key={index} item={item} onDelete={onDelete} />
              ))}
       </div>
    </>
  )
}

export default Grid