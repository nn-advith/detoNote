import styled from 'styled-components';

export const BodyWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Navbar = styled.nav`
    background-color: #FF0038;
    width: 100vw;
    display:flex;
    height: 5vh;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const NavbarWrapper = styled.div`
    width: 40vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .white{
        color: #ddd;
    }

    .mainhead{
        font-size: 2rem;
        font-weight: 700;
        cursor: pointer;
        transition: 0.1s ease-in-out;
        &:hover{
            border-bottom: 4px solid #fff;
            transition: 0.1s ease-in-out;
        }
    }

    .subhead{
        font-size: 0.8rem;
        font-weight: 400;
        font-style: italic;
    }
`

export const OutletWrapper = styled.div`
    width: 40vw;
    padding: 20px;
    min-height: 73vh;

`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: left;
    padding: 5px;
    margin: 20px 0px;
    flex-direction: column;
`

export const DisplayWrapper = styled.div`
    display: flex;
    justify-content: left;
    padding: 5px;
    margin: 20px 0px;
    flex-direction: column;

    .noteurl{
        padding: 10px 5px;
        color: #000;
        font-weight: 600;

        .sender{
        color: #ddd;
        font-size: 1.3rem;
    }
    }

    .txt{
        padding: 30px 5px;
        color: #aaa;
        font-weight: 200;
    }

   
`

export const LinkDisplay = styled.div`
    width: 600px;
    border-radius: 10px;
    background-color: #1f1f1f;
    padding: 20px;
    color: #fff;
`

export const TextDisplay = styled.div`
    width: 600px;
    border-radius: 10px;
    background-color: #1f1f1f;
    padding: 20px;
    min-height: 300px;
    font-weight: 200;
    line-height: 20px;
    color: #fff;
`


export const Input = styled.input`
    outline: none;
    border: none;
    box-shadow: none;
    width: 300px;
    background: #1F1F1F;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    border-radius: 10px;
    padding: 15px 20px;
    margin: 5px 0;

    &:focus{

        outline: 1px solid #FF0038;
    }

    &::placeholder{
        color: #A4A4A4
    }
`

export const TextArea = styled.textarea`
    outline: none;
    border: none;
    box-shadow: none;
    width: 500px;
    background: #1F1F1F;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    border-radius: 10px;
    padding: 15px 20px;
    margin: 5px 0;
    height: 300px;
    resize: none;

    &:focus{

        outline: 1px solid #FF0038;
    }

    &::placeholder{
        color: #A4A4A4
    }
`

export const Button = styled.button`
    border: none;
    box-shadow: none;
    outline: none;
    width: 100px;
    background: #ff0038;
    color: #1f1f1f;
    height: 40px;
    font-weight: 700;
    border-radius: 5px;
    transition: 0.2s ease;
    margin: 10px 0;


    &:hover{
        background: #1f1f1f;
        border: 2px solid #ff0038;
         color: #ff0038;
    }
`

export const FooterWrapper = styled.div`
    background-color: #1f1f1f;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #6F6F6F;
    font-size: 0.8rem;
    height: 7vh;

    .link{
        cursor: pointer;
        color: #6F6F6F;
        margin: 0px 5px;
        &:active{
            text-decoration: none;;
        }

        &:link{
            text-decoration: none;;
        }

        &:visited{
            text-decoration: none;;
        }

        &:hover{
            color: #fff;
            transition: 0.1s ease;
            text-decoration: underline;
        }
    }

`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const LoaderContainer = styled.div`
    height: 40px;
    padding: 20px;
    display: flex;
    align-items: center;
`

export const Warning = styled.div`
  
    margin: 10px 0;
    color: #1F1F1F;
    opacity: ${({filled}) => (filled ? '100%' : '0%')};
    transition: 0.2s all ease;
    font-size: 0.8rem;
    letter-spacing: 0.6px;
    font-weight: 700;
`