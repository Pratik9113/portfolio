import {useState,createContext, useContext} from 'react'

const ThemeContent = createContext()

const ThemeProvider = ({children}) => {
    const[theme,setTheme] = useState('light')

    return(
        <ThemeContent.Provider value = {[theme,setTheme]}>
            {children}
        </ThemeContent.Provider>
    )
}


// custom hook
const useTheme = () => useContext(ThemeContent);
export{useTheme, ThemeProvider}