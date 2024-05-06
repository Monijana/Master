import { createContext , useState } from 'react';
import FoodMenu from './menuorder/item.json';
import { Imenu } from './ifoodmenu';

export interface ContextProps {
    menu: Imenu[];
    setMenu: React.Dispatch<React.SetStateAction<Imenu[]>>;
  } 

export const MenuContext = createContext<ContextProps>({menu : FoodMenu , setMenu : () => {} });

const MenuContextProvider = ({children} : any) => {
  const [menu , setMenu] = useState(FoodMenu);

  return (
    <MenuContext.Provider value={{ menu ,setMenu }}>
        {children}
    </MenuContext.Provider>

  )
}

export default MenuContextProvider;
