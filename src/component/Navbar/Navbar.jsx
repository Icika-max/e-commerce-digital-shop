import React from 'react'
import { AppBar, Toolbar, IconButton,Badge,Menu,MenuItem,Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import logo from '../../assets/commerce.png'

const Navbar = () => {
    const classes = useStyles()
  return (
    <div position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography variant='h6' className={classes.title} color="inherit"> 
                <img src={logo} alt="TectPro" height='25px' className={classes.image}/>
                TechPro
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.button}>
                <IconButton aria-label='Show cart items' color='inherit'> 
                <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart/>
                </Badge>

                </IconButton>

            </div>
        </Toolbar>

    </div>
  )
}

export default Navbar