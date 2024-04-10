import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import dosa from './images/dosa.jpg';
import FoodMenu from './item.json';
import { FC, useState } from 'react';
import Cart from '../cart/cart';
import { Imenu } from '../ifoodmenu';
import { useNavigate,  } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const FoodCards: FC<any> = (menutype) => {    
    const navigate = useNavigate();
    var filteredData : Imenu[] = FoodMenu;
    if(menutype.type != ""){
     filteredData  =  ( menutype.type === "Veg") ? FoodMenu.filter( data => data.type == "Veg") : FoodMenu.filter( data => data.type == "Non-Veg"); 
    }
    const [menu , setMenu] = useState<Imenu[] | []>(FoodMenu);
    const handleIncrement = (src : Imenu) => {
            const addedData = menu.map(data => {
                if(src.id === data.id){
                    return { ...data , count : data.count+1}
                } 
                return data;
    });
    setMenu(addedData);
    };

    const handleDecrement = (src : Imenu) => {
        const reducedData = menu.map(data => {
            if(data.count > 0 && src.id === data.id){
                return { ...data , count : data.count-1}
            } 
            return data;
    });
    setMenu(reducedData);
    };

    const handleOnClick = () =>{
        const cartList : Imenu[] = menu.filter( data => (data.count > 0));
        console.log("cartList", cartList);
        
        navigate('cart' , { state : {cart : cartList}});
    }
    
    return (
        <div className='Card'>
        {filteredData.map((src,index) => (
        <Card sx = {{ width : '40%' , display : 'flex' ,  flexDirection : 'coloumn' , mb : '2%'}}>
            <CardMedia
                component="img"
                height="100"
                width = "20"
                image= {dosa}
                alt= {src.name}
                sx = {{ flex : '1' }}
            />
            <CardContent sx = {{ width : '40%' , flex : '1'  , flexDirection : 'coloumn' ,flexWrap : 'wrap' , alignItems : 'left'}}>
               <div>
                <Typography variant = 'h5' component ='div' flexBasis= '100%'>
                        {src.name}
                </Typography>
                <Typography variant =  'body2' flexBasis = '100%' >
                       {src.description}
                </Typography>  
               </div>
            </CardContent>
            <CardActions sx = {{ flex : '1' , width : '20%' , flexDirection : 'row' }}>
                <IconButton onClick={() => handleDecrement(src)} size="small">
                <RemoveIcon />
                </IconButton>
                <Typography variant="body2">{menu[index].count}</Typography>
                <IconButton onClick={() => handleIncrement(src)} size="small">
                <AddIcon />
                </IconButton> 
                <Button size="small">Action</Button> 
            </CardActions> 
        </Card>
        
        ))}
        <div>
        <Button type = "submit" variant = "contained" color = "primary" onClick = {handleOnClick}>
        GoToCart
        </Button>
        </div>
        </div>
    )
}

export  default FoodCards;