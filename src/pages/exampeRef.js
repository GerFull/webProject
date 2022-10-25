import style from '../pages/post.module.scss';
import { useEffect, useState, useRef } from 'react'

function ExampleRef() {

    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')

    const nameRef = useRef()
    const surNameRef = useRef()

    const handlerClick1 = (e) => {
        if (e.key === 'Enter') {
            surNameRef.current.focus()
            nameRef.current.style.backgroundColor = "gray"
            surNameRef.current.style.backgroundColor = "white"
        }
    }

    const handlerClick2 = (e) => {
        if (e.key === 'Enter') {
            nameRef.current.focus()
            nameRef.current.style.backgroundColor = "white"
            surNameRef.current.style.backgroundColor = "gray"
        }
    }


    return (
        <div className={style.posts}>
            <input
                placeholder='Имя'
                ref={nameRef}
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyUp={handlerClick1}
            />
            <input
                placeholder='Фамилия'
                ref={surNameRef}
                value={surName}
                type='text'
                onChange={(e)=>setSurName(e.target.value)}
                onKeyUp={handlerClick2}
            />
        </div>
    )
}

export default ExampleRef
