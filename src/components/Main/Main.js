import style from '../Main/main.module.scss'
import React, { useContext } from 'react'
import { AlertContext } from '../../Context/AlertContext'

function Main() {

   const data = useContext(AlertContext)

   console.log('main', data)

   return (
      <div className={style.container}>
         <div>
            <p className={style.text}>Main with button</p>
            <button onClick={data.toggle}>{data.alert ?'Скрыть Alert' :'Показать Alert'}</button>
         </div>

      </div>
   )
}

export default Main
