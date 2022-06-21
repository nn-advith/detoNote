import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Button, DisplayWrapper, LinkDisplay } from './Styles';
import { useNavigate  } from 'react-router-dom';

const DisplayLink = () => {

  const navigate = useNavigate();
  let {hashval} = useParams();

  const handleClick = () => {
    var data1 = {"hashval": hashval}
      axios({
        method: 'post',
        url: 'https://detonote-server.herokuapp.com/delete',
        data: data1
      }).then((res) => { navigate("/") })
  }

  return (
    <>
      <DisplayWrapper>
      <div className='noteurl'>
      Note URL
      </div>
      <LinkDisplay>
      https://detonote.netlify.app/note/{hashval}
      </LinkDisplay>   
      <div className='txt'>
     Share this link to the recipient.
      </div>
      <Button onClick={handleClick}>Delete Note</Button>
      </DisplayWrapper>
    </>
  )
}

export default DisplayLink