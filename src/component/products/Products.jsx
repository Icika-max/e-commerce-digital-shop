import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
const products=[
    {id:1, name:'macbook', description: 'macbook air', price:'$30', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80'},
    {id:2, name:'Hp', description: 'Hp Envy Ryzen', price:'$20', image:'https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}

]

const Products = () => {
    const classes= useStyles()
  return (
<main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container justifyContent='center' spacing={4}>
        {
            products.map((product)=>(
                <Grid key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>

                </Grid>
            ))
        }

    </Grid>
</main>  )
}

export default Products