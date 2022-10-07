import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [screen,setScreen]=useState('hii')

    const handleClick=(event)=>{
        setScreen(screen+event.target.value)
    }

  return (
    <>
    <div className="container">
        <div className="screen">
            {screen}
        </div>
        <div className="all_buttons">
            <div className="rows">
                <button className="buttons AC_button" onClick={handleClick} value='AC' >AC</button>
                <button className="buttons" onClick={handleClick} value='C' >C</button>
                <button className="buttons" onClick={handleClick} value='%' >%</button>
                <button className="buttons" onClick={handleClick} value='/' >/</button>
            </div>
            <div className="rows">
                <button className="buttons" onClick={handleClick} value='7' >7</button>
                <button className="buttons" onClick={handleClick} value='8' >8</button>
                <button className="buttons" onClick={handleClick} value='9' >9</button>
                <button className="buttons" onClick={handleClick} value='*' >*</button>
            </div>
            <div className="rows">
                <button className="buttons" onClick={handleClick} value='4' >4</button>
                <button className="buttons" onClick={handleClick} value='5' >5</button>
                <button className="buttons" onClick={handleClick} value='6' >6</button>
                <button className="buttons" onClick={handleClick} value='-' >-</button>
            </div>
            <div className="rows">
                <button className="buttons" onClick={handleClick} value='1' >1</button>
                <button className="buttons" onClick={handleClick} value='2' >2</button>
                <button className="buttons" onClick={handleClick} value='3' >3</button>
                <button className="buttons" onClick={handleClick} value='+' >+</button>
            </div>
            <div className="rows">
                <button className="buttons" onClick={handleClick} value='0' >0</button>
                <button className="buttons" onClick={handleClick} value='00' >00</button>
                <button className="buttons" onClick={handleClick} value='.' >.</button>
                <button className="buttons equal_button" onClick={handleClick} value='=' >=</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculator