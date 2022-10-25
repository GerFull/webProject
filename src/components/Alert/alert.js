import style from '../Alert/alert.module.scss'
import React, { useContext } from 'react'
import { AlertContext } from '../../Context/AlertContext'

function Alert() {


   const data = useContext(AlertContext)

   console.log(data)


   if (!data.alert) return null

   return (
      <div className={style.alert__container}>
         <div className={style.alert}>
            Alert!!!!!!!!!!!!!
         </div>
      </div>
   )
}

export default Alert
