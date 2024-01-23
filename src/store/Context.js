import { createContext, useReducer } from "react";
import reducer, { initState } from "./reducer";


export const Context = createContext(); 

function Provider({children}) {

    const [state, dispatch] = useReducer(reducer, initState);

    const contextData = {state, dispatch}

    return <Context.Provider value={contextData}>
        {children}
    </Context.Provider>;
}

export default Provider;