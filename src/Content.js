import { useState } from "react";


const Content = () => {
    const [name, setName] = useState('James')
    const [count, setCount] = useState(0);
    
    const handleNameChange = () =>{
        const names = ['Bob', 'Williams', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int])
      }
    
    const handleClick = () =>{
        setCount(count + 1)
        console.log(count)
    }
    
    // const handleClick2= (name) =>{
    //     console.log(`${name} was clicked`)
    // }


    return (
       <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <p>
            {count}!
            </p>
            <button onClick={handleClick}>Change Count</button>

       </main>
    )
}
export default Content
