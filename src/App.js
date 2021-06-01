import React, { useState } from "react";
import "./css/style.css";
const App = () => {

    const [data, setData] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const result = document.getElementById("result");
        const computer = document.getElementById("computer");
        
        function randomNumber(min, max) {
            const array = ["snake", "water", "gun"]
            const random = Math.round(Math.random() * (max - min) + min);
            console.log(random)
            if (data === "") {
                computer.innerHTML = "computer choise is : "
            } else {
                computer.innerHTML = "computer choise is : " + array[random];
            }

            if (array[random] === "snake") {
                if (data === "snake") {
                    result.innerHTML = "game is tie 😫";
                }
                else if (data === "gun") {
                    result.innerHTML = "you win 😉";
                } else if (data === "water") {
                    result.innerHTML = "you loss 😢";
                } else {
                    result.innerHTML = "plese valid input";
                }
            } else if (array[random] === "water") {
                if (data === "snake") {
                    result.innerHTML = "you win 😉";
                } else if (data === "water") {
                    result.innerHTML = "game is tie 😫";
                } else if (data === "gun") {
                    result.innerHTML = "you loss 😢";
                } else {
                    result.innerHTML = "please valid input";
                }
            } else if (array[random] === "gun") {
                if (data === "snake") {
                    result.innerHTML = "you loss 😢 ";
                } else if (data === "water") {
                    result.innerHTML = "you win 😉";
                } else if (data === "gun") {
                    result.innerHTML = "game is tie 😫"
                } else {
                    result.innerHTML = "please valid input"
                }
            }
            
            const sup = document.getElementById("sup");
            if(result.innerHTML === "please valid input"){
                sup.style.visibility = "visible";
            }else{
                sup.style.visibility = "hidden"
            }
            
        }
        randomNumber(0, 2);
        setData("")


    }
    // document.write("Random Number between 1 and 5: ") 

    // Function call
    // document.write( randomNumber(0,2) ); 
    // randomNumber(0,2)
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>snake, water and gun</h1>
                    <p id="rules"> <span>rules<sup>*</sup> </span>: only choose one snake, water And gun</p>
                    <p id="computer"> </p>
                    <br />
                    <input type="text"  name="game" id="game" value={data.trim()} onChange={(e) => {
                        // console.log(e)
                        setData(e.target.value);
                    }} />
                    <input type="submit" value="play" onClick={submit} id="btn"/>
                    <br />
                    <p><sup style={{color: 'red'}} id="sup">*</sup><span id="result"></span></p>
                </div>
            </div>
        </>
    )
}
export default App;