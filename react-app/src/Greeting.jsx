import { useState } from 'react'
const Greeting = () =>{
    const [count,setCount]=useState(1);
    const handleclick = ()=>{
        setCount(count+1);
    }
    const handledec = ()=>{
        if (count<=0){
            alert("Count cannot be negative");
            return;
    }
        setCount(count-1);
    }
    return(
        <div className='h-screen flex flex-col justify-center items-center'> 
        <div> <h2 className='text-2xl mb-4'></h2>
        <h2>Count: {count}</h2></div>
        <div>
        <button onClick={handleclick} className='bg-blue-500'>Increment</button>
        <button onClick={handledec} className='bg-red-500'>Decrement</button>
      
        </div>
        </div>
    )
}
export default Greeting