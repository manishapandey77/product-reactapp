import React, {Fragment} from 'react'
import classes from './Products.module.css';
const Products = ({product}) => {
    
    return (
        <Fragment>
        <div className={classes.container}>
           {product.map((currProduct)=>{
                const {id ,title , thumbnail} = currProduct;
                return <div className={classes.card} key={id}>

            <img src={thumbnail} alt="" className={classes.img}></img>

           <h3 className={classes.title}>{title}</h3>
           </div>
           })}
         </div>
    </Fragment>
  )
}

export default Products
