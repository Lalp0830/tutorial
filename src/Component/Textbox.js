import React, { useState } from 'react'

export default function Textbox(props) {
    const handleIncrement = () => {
        setTotal(total + num2);
    }
    const handleDecrement = () => {
        setTotal(total - num2);
    }
    const handleReset = () => {
        setTotal(0);
    }
    const handleOnChange = (event) => {
        setnum2(+event.target.value)
    }
    const handleOnChangeText = (event) => {
        setText(event.target.value)
    }
    const upperCase=()=>{
        let newWord=text.toUpperCase();
        setText(newWord);
    }
    const lowerCase=()=>{
        let newWord=text.toLowerCase();
        setText(newWord);
    }
    const [num, setNum] = useState(9);
    const [num2, setnum2] = useState(0);
    const [total, setTotal] = useState(num2 + num);
    const [text, setText] = useState('');
    return (
        <>
            < div className='mb-3' style={{color:props.mode=='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className='form-lable' >Enter Your Number</label><br></br>
                    <input className='input-number' style={{backgroundColor:props.mode=='light'?'grey':'white'}} value={num2} onChange={handleOnChange} />
                </div>


                <div className='main_div '>
                    <div className='center_div mx-10'>
                        <h1>{total}</h1>
                        <div className='div_button'>
                            <button type="button" className="btn btn-success" onClick={handleIncrement}>Increment</button>
                            <button type="button" className="btn btn-danger mx-3" onClick={handleDecrement}>Decrement</button>
                            <button type="button" className="btn btn-primary mx-3" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container" style={{color:props.mode=='light'?'black':'white'}}>
                <h1>Enter your text here</h1>
                <textarea className="form-control" value={text} id="myBox" onChange={handleOnChangeText} style={{backgroundColor:props.mode=='light'?'grey':'white'}} row="8"></textarea>
                <button type="button" className="btn btn-primary" onClick={upperCase}>Change to Upper</button>
                <button type="button" className="btn btn-primary mx-2" onClick={lowerCase}>Change to lower</button>

                
                <h2>Preview</h2>
                <p>
                    {text.split(" ").length}words and {text.length} characters
                </p>
            
            </div>
            


        </>

    )

}
