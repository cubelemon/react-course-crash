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
    const [cart,setCart] = useState ({
        item:'apple',
        quantity:0,
    })

    function addApple(cart) {
        setCart(prevCart => ({...prevCart, quantity: prevCart.quantity + 1}))
    }

    function removeApple(cart) {
        // 1. Use a callback to get the previous value
        // 2. Spread out all the propersties of the prev State
        // 3. Only change the property that you ned to change
        setCart(prevCart => ({...prevCart, quantity: prevCart.quantity - 1}))
    }

    return (
                <div>
                    <button onClick={removeApple}>-</button>
                    {cart.quantity}
                    {cart.item}
                    <button onClick={addApple}>+</button>
                </div>
            )
    }


export default Counter