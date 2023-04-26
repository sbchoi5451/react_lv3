import styled from 'styled-components'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import Modal from 'react-modal'

export const PrimaryStyle = styled.div`
margin: 0 auto;
display: flex;
`
export const Titletyle = styled.div`
width: 80%;
margin: 0 auto 0 10px;
float: left;
`
export const Iconstyle = styled.span`
float: right;
width: fit-content;
margin-top: 13px;
padding-bottom: 10px;
`

export const LPButtonStyle = styled.button`
color: black;
width: 200px;
height: 50px;
border: 2px solid #3296FF;
font-weight: bold;
background: transparent;
margin: 10px;

&:hover {
  background: #3296FF;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
`
export const LPMButtonStyle = styled.button`
color: white;
width: 130px;
height: 40px;
font-weight: bold;
border: transparent;
background: #3296FF;
margin: 10px;

&:hover {
  font-weight: bold;
  border: 2px solid #3296FF;
  background: transparent;
  color: black;
  cursor: pointer;
}
`

export const LPSButtonStyle = styled.button`
color: white;
width: 100px;
height: 30px;
font-weight: bold;
border: transparent;
background: #3296FF;
margin: 10px;

&:hover {
  font-weight: bold;
  border: 2px solid #3296FF;
  background: transparent;
  color: black;
  cursor: pointer;
}
`

export const LNButtonStyle = styled.button`
color: #CD1F48;
width: 200px;
height: 50px;
border: 2px solid #CD1F48;
font-weight: bold;
background: transparent;
margin: 10px;

&:hover {
  background: #CD1F48;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
`

export const LNMButtonStyle = styled.button`
color: white;
width: 130px;
height: 40px;
font-weight: bold;
border: transparent;
background: #CD1F48;
margin: 10px;

&:hover {
  font-weight: bold;
  border: 2px solid #CD1F48;
  background: transparent;
  color: black;
  cursor: pointer;
}
`

export const LNSButtonStyle = styled.button`
color: white;
width: 100px;
height: 30px;
font-weight: bold;
border: transparent;
background: #CD1F48;
margin: 10px;

&:hover {
  font-weight: bold;
  border: 2px solid #CD1F48;
  background: transparent;
  color: black;
  cursor: pointer;
}
`

export const InputStyle = styled.input`
border: 1px solid black;
width: 200px;
height: 40px;
border-radius: 10px;
margin-right: 10px;
`

export const ButtonStyle = styled.button`
border: 2px solid ${(props) => props.borderColor};
width: 120px;
height: 40px;
background-color: transparent;
color: ${(props) => props.fontColor};
margin-left: 20px;
font-weight: bold;

&:hover {
    background-color: ${(props) => props.backgroundColor};
    color: white;
    cursor: pointer;
    font-weight: bold;
}
`

export const ContentStyle = styled.div`
display: flex;
margin: 10px 10px 10px 10px;
`

export const Modalstyle = styled(Modal)`
width: 500px;
height: 400px;
border: transparent;
display: flex;
flex-direction: column;
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
margin: auto;
text-align:center;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color: white;
box-shadow: 0 8px 32px 0 #787878;
`

export const ButtonContainer = styled.div`
display: flex;
position: absolute;
bottom: 20px;
right: 20px;
margin: auto;
`

export const IconButtonStyle = styled(IoIosCloseCircleOutline)`
font-size: 50px;
margin-bottom: 300px;
cursor: pointer;
`

export const BodyStyle = styled.div`
border: 2px solid #505050;
height: 200px;
width: 99%;
margin: 30px auto;
`

export const SelectStyle = styled.select`
border: 2px solid #787878;
width: 15%;
height: 50px;
border-radius: 8px;
margin-left: 10px;
padding: 5px;
`