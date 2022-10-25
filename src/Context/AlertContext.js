import { createContext, useState } from 'react'

export const AlertContext = createContext();

function AlertProvider({ children }) {

   const [alert,setAlert]=useState(false)


   const toggle =()=>{
      setAlert(prev=>!prev)
   }


   const obj={
      alert,
      toggle
   }

   return (
      <AlertContext.Provider value={obj} >
         {children}
      </AlertContext.Provider>
   )
}

export default AlertProvider
