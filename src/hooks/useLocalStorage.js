import { useEffect, useState } from "react";


export function useLocalStorage (key, initialState) {

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const item = localStorage.getItem(key);
        return item ? setState(JSON.parse(item)) : initialState;
    }, [])
    

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state])
    
    return [state, setState];

}