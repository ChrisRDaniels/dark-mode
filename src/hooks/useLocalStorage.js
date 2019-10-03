  
import {useState} from "react"

const useLocalStorage = (key, intialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : intialValue
    })
    

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };

    return [storedValue, setValue]
}

export default useLocalStorage