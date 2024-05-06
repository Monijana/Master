import { TextField , IconButton, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FC , useState } from 'react';
import FoodMenu from '../menuorder/item.json';
import { Imenu } from '../ifoodmenu';

const SearchMenu : FC<any> = (data) => {

    const [ searchData , setSearchData ] = useState<Imenu[]>(FoodMenu);
    
    const handleChange = ( event : any , value : any) => {
       setSearchData(value);
    }
    return (
        <div>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={FoodMenu.map(item => ({...item , label : item.name}))}
      onChange = {handleChange}
      sx={{ width: 300 }}
      renderInput={(params) => 
                                <TextField 
                                    {...params}
                                    label="Menu" 
                                    variant="standard"
                                           />}
    />
      </div>
    )
}

export default SearchMenu;