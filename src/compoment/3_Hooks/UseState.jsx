import React from "react";

function Demo() {
    const [count, setCount] = React.useState(0);

    const add = () => {
        //第一种写法
        // setCount(count + 1)
        //第二种写法
        setCount(v => v + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={add}>addd</button>
        </div>
    )

}

export default Demo