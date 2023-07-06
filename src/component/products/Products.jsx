import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products=[
    {id:1, name:'macbook', descripion: 'macbook air', price:'$30'},
    {id:2, name:'Hp', descripion: 'Hp Envy Ryzen 7 5800', price:'$20'}

]

const Products = () => {
  return (
<main>
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