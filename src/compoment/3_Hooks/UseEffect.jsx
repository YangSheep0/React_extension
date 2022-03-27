import React from "react";
import ReactDOM from "react-dom";

function Demo() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('@');
        let timer = setInterval(() => {
            add()
        }, 1000)

        //component willunmount
        return () => {  
            clearInterval(timer)
        }
    }, [])



    const add = () => {
        setCount(v => v + 1)
    }

    const clear = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={clear}>clear</button>
        </div>
    )

}

export default Demo