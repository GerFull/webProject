import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal'
import style from '../menu/menu.module.scss';

export default function Menu() {

   const [active, setActive] = useState(false)
   const [checkEmail, setCheckEmail] = useState(false)
   const [email, setEmail] = useState()
   const [name, setName] = useState()
   const [password, setPassword] = useState('')
   const [checkPassword, setCheckPassword] = useState()
   const [tab, setTab] = useState(1)
   const [windowInnerWidth, setwindowInnerWidth] = useState()

   const changeEmail = (value) => {
      console.log(value)
      setEmail(email)
      if (EMAIL_REGEXP.test(value)) {
         setCheckEmail(false)
      } else {
         setCheckEmail(true)
      }
   }

   const changePassword = (value) => {
      setPassword(email)
      if (PASSWORD.test(value)) {
         setCheckPassword(false)
      } else {
         setCheckPassword(true)
      }

   }

   useEffect(() => {
      setwindowInnerWidth(document.documentElement.clientWidth)
      window.addEventListener("resize", handleWidth);
   })

   const handleWidth = () => {
      setwindowInnerWidth(window.innerWidth)
   };


   const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
   const PASSWORD = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g

   return (
      <>
         <div className={style.menu}>
            <Link to='/'>
               <div className={style.menu__logoBox}>
                  <img className={style.menu__logo} src='/images/logo.png' />
                  <p><span style={{ color: '#6E4D8C' }}>LAVE</span>NDER</p>
               </div>
            </Link>
            {
               windowInnerWidth > 768 ? <div className={style.menu__center}>

                  <div class={style.menu__search}>
                     <input type="text" placeholder="Поиск" />
                     <img src='/images/searchLogo.png' />
                  </div>

               </div> : null
            }

            <div className={style.menu__buy}>
               {
                  windowInnerWidth < 768 ? <img src='images/search.png' /> : null
               }
               <img onClick={() => setActive(true)} src='/images/user.png' />
               <Link to='/basket'><img src='/images/buyImg.png' /></Link>
               <p>(0 р)</p>
            </div>
         </div>
         <div className={style.menu__nav}>
            {
               windowInnerWidth > 768 ?

                  <div>
                     <p><Link className={style.menu__navItem}>Для лица</Link></p>
                     <p><Link className={style.menu__navItem}>Для тела</Link></p>
                     <p><Link className={style.menu__navItem}>Вопросы</Link></p>
                     <p><Link className={style.menu__navItem}>Акции</Link></p>
                     <p><Link className={style.menu__navItem}>Доставка</Link></p>
                  </div> : null}
         </div>
         <Modal active={active} setActive={setActive}>
            <div className={style.modal}>
               {
                  tab === 1 ?
                     <>
                        <div className={style.modal__title}>
                           Вход
                        </div>
                        <div className={style.modal__inputBox}>
                           <input value={email} style={checkEmail ? {
                              border: '1px solid red',
                              color: 'red'
                           } : null} onChange={(e) => changeEmail(e.target.value)} className={style.modal__input} placeholder='Email' />

                           <input value={password} style={checkPassword ? {
                              border: '1px solid red',
                              color: 'red'
                           } : null} onChange={(e) => changePassword(e.target.value)} className={style.modal__input} placeholder='Пароль' />
                           <div className={style.modal__btn}>Войти</div>
                        </div>
                        <div className={style.modal__text}> Нет аккаунта? <span onClick={() => setTab(0)} style={{ color: '#40005E' }}>Зарегистрироваться</span> </div>
                     </> : <>
                        <div className={style.modal__title}>
                           Регистрация
                        </div>
                        <div className={style.modal__inputBox}>

                           <input value={name} onChange={(e) => setName(e.target.value)} className={style.modal__input} placeholder='Имя' />

                           <input value={email} style={checkEmail ? {
                              border: '1px solid red',
                              color: 'red'
                           } : null} onChange={(e) => changeEmail(e.target.value)} className={style.modal__input} placeholder='Email' />

                           <input type='password' value={password} style={checkPassword ? {
                              border: '1px solid red',
                              color: 'red'
                           } : null} onChange={(e) => changePassword(e.target.value)} className={style.modal__input} placeholder='Пароль' />
                           <div className={style.modal__btn}>Войти</div>
                        </div>
                        <div className={style.modal__text}> Есть аккаунт? <span onClick={() => setTab(1)} style={{ color: '#40005E' }}>Войти</span> </div>
                     </>
               }


            </div>
         </Modal>
      </>
   )
}

