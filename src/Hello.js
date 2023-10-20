// import Counter from "./Counter.js";
import React, {useState} from "react";

function Hello(props){
    const [name, setName] = useState(props.value);

    // function changeName() {

    // }
    return(
    <>
    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
    {name}
    <p>hello, {name}!</p>
    </>
    );
}
export default Hello;