import React, { useRef } from "react";
import ReactDOM from "react-dom";

function Demo() {
    
    const inputRef = useRef()

    const show = () => {
        alert(inputRef.current.value) 
    }

    return (
        <div>
            <input type="text"  ref={inputRef}/>
            <button onClick={show}>show</button>
        </div>
    )

}

export default Demo