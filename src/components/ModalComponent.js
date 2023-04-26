import React, { useState } from 'react'
import * as ST from '../components/Style'

function ModalComponent() {

  const [shownModaL1, setShownModaL1] = useState(false)
  const [shownModaL2, setShownModaL2] = useState(false)

  const openModaL1 = () => setShownModaL1(true)
  const openModaL2 = () => setShownModaL2(true)

  const closeModaL1 = () => setShownModaL1(false)
  const closeModaL2 = () => setShownModaL2(false)

  return (
    <div>
      <h1>Modal</h1>
      <ST.ButtonStyle borderColor="black" backgroundColor="black" fontColor="black"
      onClick={openModaL1}>Open Modal</ST.ButtonStyle>
      <ST.Modalstyle isOpen={shownModaL1} ariaHideApp={false}>
        닫기와 확인 버튼 2개가 있고, <br />외부 영역을 눌러도 모달이 닫히지 않아요.
        <ST.ButtonContainer>
          <ST.ButtonStyle borderColor="black" backgroundColor="black" fontColor="black"
          onClick={closeModaL1}>닫기</ST.ButtonStyle>
          <ST.ButtonStyle borderColor="black" backgroundColor="black" fontColor="black">
            확인</ST.ButtonStyle>
        </ST.ButtonContainer>
      </ST.Modalstyle>

      <ST.ButtonStyle borderColor="#DB631F" backgroundColor="#DB631F" fontColor="#DB631F"
      onClick={openModaL2}>Open Modal</ST.ButtonStyle>
      <ST.Modalstyle isOpen={shownModaL2} ariaHideApp={false} onRequestClose={closeModaL2}>
        닫기 버튼 1개가 있고, <br />외부 영역을 누르면 모달이 닫혀요.
        <ST.ButtonContainer>
          <ST.IconButtonStyle onClick={closeModaL2}></ST.IconButtonStyle>
        </ST.ButtonContainer>
      </ST.Modalstyle>
    </div>
  )
}

export default ModalComponent

