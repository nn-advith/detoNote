import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom'
import { Button, Input, InputWrapper, TextArea, LoaderContainer, Wrapper, Warning } from './Styles';
import {ScaleLoader} from 'react-spinners'


const Insert = () => {
  
  const navigate = useNavigate()

  const [sender, setSender] = useState('')
  const [message, setMessage] = useState('')
  const [urlRec, setUrlRec] = useState(true);
  const [filled, setFilled] = useState(false);

  const handleSender = (e) => {
    setSender(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = () => {

    if ( sender.length === 0 || message.length === 0) {
      setFilled(true)
    }
    else{
      setUrlRec(false)
      var data1 = {"sender": sender, "message": message}
      axios({
        method: 'post',
        url: 'https://detonote-server.herokuapp.com/addnote',
        data: data1
      }).then((res) => { navigate(`/link/${res.data.url}`); setUrlRec(true); setSender('')
      setMessage('')})
      
    }
    
  }
 
  return (
    <>
    <InputWrapper>

      <Input type="text" placeholder="Sender" value={sender} onChange={(e) => {handleSender(e)}}/>
      <TextArea  placeholder='Enter message ' value={message} onChange={(e) => {handleMessage(e)}}/>
      <Wrapper>
        <Button onClick={handleSubmit} >Submit</Button>  
        <LoaderContainer>{ urlRec === false ? <ScaleLoader color='#000' margin={2} height={20}/> : null}</LoaderContainer>
      </Wrapper>
      <Warning filled={filled}>Please fill all fields.</Warning>
     
    </InputWrapper>
    </>
  )
}

export default Insert;