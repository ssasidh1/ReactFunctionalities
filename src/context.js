import React,{useContext,useState} from "react";


const context = React.createContext();
const toggle = React.createContext();

export function useCurrContext(){
    return useContext(context);
}
export function useToggle(){
    return useContext(toggle);
}

export function ContextProvider({children}){
    const [dark,setDark] = useState(true);

    function toggleTheme(){
        setDark(prev=>!prev)
    }

    return(
        <context.Provider value={dark}>
            <toggle.Provider value={toggleTheme}>
                {children}
            </toggle.Provider>
        </context.Provider>
    )
}