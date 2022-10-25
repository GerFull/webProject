import { Link } from "react-router-dom"


function Bestseller() {
   return (
      <div>

         <Link to={'posts'}><p>Posts</p></Link>
         <Link to={'ref'}><p>Expample Ref</p></Link>
         <Link to={'context'}><p>context</p></Link>
      </div>
   )
}

export default Bestseller
