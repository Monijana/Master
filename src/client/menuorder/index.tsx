import './index.css';
import {useState} from 'react';
import Fab from '@mui/material/Fab';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import FoodCards from './card';


const MenuOrder = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        size: 'small',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      
      const [ type , setType ] = useState("");
      const [isHighlighted, setIsHighlighted] = useState(false);
      const handleType = (option : string) =>{
            setType(option);
            setIsHighlighted(true);
            console.log("highlight", isHighlighted);
      }

    return (
        <div >
            <Search >
                <SearchIconWrapper sx = {{ width : "50" ,  display : "flex" }}>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase 
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
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

