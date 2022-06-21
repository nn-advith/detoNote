import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { DisplayWrapper, LinkDisplay, TextDisplay } from './Styles';
import {ScaleLoader} from 'react-spinners'

const ShowNote = () => {

    const [message, setMessage] = useState('')
    const [urlRec, setUrlRec] = useState(true);
    const [sender, setSender] = useState('')
    let {hashval} = useParams();

    useEffect(() => {
      setUrlRec(false)
        axios({
            method: 'post',
            url: 'https://detonote-server.herokuapp.com/noteS',
            data: {
                hashval: hashval
            }
        }).then(res => { setMessage(res.data.message); setSender(res.data.sender); setUrlRec(true)})
    },[hashval])

  return (
    <>
      <DisplayWrapper>
      {urlRec === false ? <ScaleLoader /> : 

      (message === 'nf' ? 
      <LinkDisplay>
      The note has been destroyed. Ask the sender to send the note again.
      </LinkDisplay> :
      <div>
      <div className='noteurl'>
      Note From 
      </div>
      <LinkDisplay>
      {sender}
      </LinkDisplay>
      <div className='noteurl'>
      Message
      </div>
      <TextDisplay>
      {message}
      </TextDisplay>
      </div>
      )   

      }
      
      
      </DisplayWrapper>
    </>
  )
}

export default ShowNote