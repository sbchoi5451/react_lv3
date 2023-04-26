import React, { useState } from 'react'
import * as ST from '../components/Style'

function Input() {

    const [num, setNum] = useState(0)
    const [name, setName] = useState('')

    const onNumberChangeHandler = (e) => {
        const newNum = Number(e.target.value.replace(/[^0-9]/g, '')).toLocaleString()
        setNum(newNum)
    }

    const onNameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const alertFuction = () => {
        if (!name || !num) {
            alert("이름과 가격을 입력해주세요.")
        } else {
            alert("{ name: " + name + ", price: " + num.replace(/[^0-9]/g, '') + " }")
        }
        setNum('')
        setName('')
    }

    return (
        <div>
            <h1>Input</h1>

            <ST.ContentStyle>
                <div>
                    이름&nbsp;
                    <ST.InputStyle type="text"
                        value={name}
                        onChange={onNameChangeHandler}></ST.InputStyle>
                    가격&nbsp;<ST.InputStyle type="text"
                        value={num}
                        onChange={onNumberChangeHandler}></ST.InputStyle>
                </div>

                <div>
                    <ST.ButtonStyle borderColor="black" backgroundColor="black" fontColor="black"
                    onClick={alertFuction}>저장</ST.ButtonStyle>
                </div>
            </ST.ContentStyle>
        </div>
    )
}

export default Input

