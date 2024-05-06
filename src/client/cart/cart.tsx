import { FC , useContext } from 'react';
import { Imenu } from '../ifoodmenu';
import { useLocation, useNavigate  } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import dosa from '../menuorder/images/dosa.jpg';
import Button from '@mui/material/Button';
import { MenuContext } from '../context';


const CartComponent : FC<any> = ( ) => { 
  
    const navigate = useNavigate();
    const location = useLocation();
    const context = useContext(MenuContext) ;
    const {menu , setMenu } = context;
    const cartList : Imenu[] = menu.filter( data => (data.count > 0)); 
    
    console.log("in cart", menu);
    const handleOnClick = () => {
        navigate('/');
    }
    
    return (
        <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', ml: '30%'}}>
            {cartList?.map( (src : Imenu) => (
            <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="dosa" src={ dosa} />
                </ListItemAvatar>
                <ListItemText >{ src.name }</ListItemText>                
                <ListItemText sx = {{ bgcolor :'blue' }}>{ src.count }</ListItemText>
            </ListItem>            
            <Divider variant="inset" component="li" />
            </div>
            ))}
        </List>
        <Button type = "submit" variant = "contained" color = "primary" onClick = {handleOnClick}>
            Main Menu
        </Button>
        </div>
    );
}

export default CartComponent;