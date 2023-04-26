import React from 'react'
import * as ST from '../components/Style'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

function Button() {

  const LargePrimaryButton = () => {
    alert('버튼을 만들어보세요')
  }

  const LargeNegativeButton = () => {
    prompt("어렵나요?")
  }

  return (
    <div>
      <h1>Button</h1>
      <ST.PrimaryStyle>
        <ST.LPButtonStyle onClick={LargePrimaryButton}>
          <ST.Titletyle>Large Primary Button</ST.Titletyle>
          <ST.Iconstyle><AiOutlineLike /></ST.Iconstyle>
        </ST.LPButtonStyle>

        <ST.LPMButtonStyle>Medium</ST.LPMButtonStyle>
        <ST.LPSButtonStyle>Small</ST.LPSButtonStyle>
      </ST.PrimaryStyle>

      <ST.PrimaryStyle>
        <ST.LNButtonStyle onClick={LargeNegativeButton}>
          <ST.Titletyle>Large Negative Button</ST.Titletyle>
          <ST.Iconstyle><AiOutlineDislike /></ST.Iconstyle>
        </ST.LNButtonStyle>

        <ST.LNMButtonStyle>Medium</ST.LNMButtonStyle>
        <ST.LNSButtonStyle>Small</ST.LNSButtonStyle>
      </ST.PrimaryStyle>

    </div>
  )
}

export default Button