import React, { useState } from 'react'
import * as ST from '../components/Style'

function Select() {

  const [content, setContent] = useState()

  const onChangeHandler = (e) => {
    setContent(e.currentTarget.value)
  }

  const alertHandler = (e) => {
    if (content === 'null') {
      alert('1번 옵션을 선택해주세요')
    } else {
      e.preventDefault()
    }
  }

  const Options = [
    { basic: '리액트', advanced: '리액트 심화' },
    { basic: '자바', advanced: '자바 심화' },
    { basic: '스프링', advanced: '스프링 심화' },
    { basic: '리액트네이티브', advanced: '리액트네이티브 심화' },
  ]

  return (
    <ST.BodyStyle>
      <h1>Select</h1>
      <ST.SelectStyle onChange={onChangeHandler} value={content}>
        <option value="null">1.옵션선택</option>
        {Options.map(item => {
          return <option key={item.basic} value={item.basic}>{item.basic}</option>
        })}
      </ST.SelectStyle>

      <ST.SelectStyle onClick={alertHandler}>
        <option value="null">2.옵션선택</option>
        {Options.map(item => item.basic === content ?
          <option key={item.advanced} value={item.advanced}>{item.advanced}</option>
          : null)}
      </ST.SelectStyle>
    </ST.BodyStyle>
  )
}

export default Select

