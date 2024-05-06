import './index.css';
import {useState, useContext} from 'react';
import Fab from '@mui/material/Fab';
import FoodCards from './card';
import SearchMenu from '../design/search';
import FoodMenu from './item.json';   


const MenuOrder = () => {

      const [ type , setType ] = useState("");
      const [isHighlighted, setIsHighlighted] = useState(false);
      const handleType = (option : string) =>{
            setType(option);
            setIsHighlighted(true);
      }

    return (
        <div className='Order'>            
            <SearchMenu data = {FoodMenu}  />
            <div className="Menu">
                <Fab variant="extended" className = {`isHighlighted ? 'highlight' : ''`} onClick={() => handleType("Veg")}>
                    Veg
                </Fab>
                <Fab variant="extended" sx = {{ ml : 2 }} className = "Button" onClick = {() => handleType("Non-Veg")}>
                    Non-Veg
                </Fab>
            </div>
          <FoodCards type = {type}/>
        </div>
    )
}

export default MenuOrder;

