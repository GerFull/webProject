import styles from './Modal.module.scss'


export default function Modal({ active, setActive, children }) {

   return <>
      {
         active ? <div className={styles.modal} onClick={()=> setActive(false)} >
            <div className={styles.content} onClick={e=>e.stopPropagation()}>
               {children}
            </div>
         </div> : null
      }
   </>
}