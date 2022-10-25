import AlertProvider from '../Context/AlertContext'
import React from 'react'
import Alert from '../components/Alert/alert'
import Main from '../components/Main/Main'



function ExampleContext() {
   return (
      <AlertProvider>
         <Alert/>
         <Main/>
      </AlertProvider>

   )
}

export default ExampleContext
