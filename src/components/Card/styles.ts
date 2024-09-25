import styled from 'styled-components'

export const Section = styled.section`
    position: relative;
    width: 90%;
    min-width: 300px; 
    max-width: 450px;
    min-height: 265px;
    max-height: 400px;
    background-color: hsl(217, 19%, 24%);
    color: hsl(193, 38%, 86%);
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem 3rem 4rem;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media(max-width: 430px) {
        font-size: 1.6rem;
    }
`

export const AdviceID = styled.p`
    color: hsl(150, 100%, 66%);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .2rem;
`

export const Advice = styled.p`
    color: hsl(193, 38%, 86%);
    font-size: 2.8rem;
    font-size: clamp(1.6rem, 4vw + 1rem, 2.8rem);
    text-align: center;
    max-width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
`

export const DiceButton = styled.button`    
    background-color: hsl(150, 100%, 66%);
    border: none;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -2.5rem;
    transition: all .3s ease-in-out;

    &:hover {
        box-shadow: 0 0 50px 2px hsl(150, 100%, 66%);
    }
`