import React, { useState } from "react"


// function Counter() {
//     const [counter, setCounter] = useState(0)

//     function incrementCounter() {
//         setCounter((prevCounter) => prevCounter + 1)
//         setCounter((prevCounter) => prevCounter + 1)
//     }
//     function decrementCounter() {
//         setCounter((prevCounter) => prevCounter - 1)
//         setCounter((prevCounter) => prevCounter - 1)
//     }

//     return (
//         <div>
//             <button onClick={decrementCounter}>-</button>
//             {counter}
//             <button onClick={incrementCounter}>+</button>
//         </div>
//     )

    
// }

function Counter() {
    const [arr, setArr] = useState([]) /* the () after useState is the default data */

    function addPlus() {
        setArr(prevArr => [...prevArr, '+'])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, '-'])

    }
    

    return (
                <div>
                    <button onClick={addMinus}>-</button>
                    {arr.toString()}
                    <button onClick={addPlus}>+</button>
                    
                </div>
            )
    }


export default Counter