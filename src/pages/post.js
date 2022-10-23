import style from '../pages/post.module.scss';
import { useEffect, useState } from 'react'

function Post() {

   const [post, setPost] = useState([])

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((json) => setPost(json.slice(0, 20)));
   }, [])


   console.log(post)

   const deletePost = (id) => {
      setPost(post.filter(item=> item.id !== id))
   }

   return (
      <div className={style.posts}>
         {
            post.map(item => (
               <div className={style.posts__item}>
                  <p className={style.posts__item_id}>ID:{item.id} </p>
                  <p className={style.posts__item_title}>TItle: {item.title}</p>
                  <p className={style.posts__item_body}>Body: {item.body}</p>

                  <div onClick={() => deletePost(item.id)} className={style.posts__item_delBtn}>Удалить</div>
               </div>
            ))
         }


      </div>
   )
}

export default Post
