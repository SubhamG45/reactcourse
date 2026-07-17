import styled from "styled-components";

export const Section = styled.section`
    padding: 10px 20px;
    background-color: #000000;
    color: #ffffff;
    text-align: center;
`

export const Div = styled.div`
    padding:10px 20px;
    background-color:#000000;
    color:#ffffff;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
`

export const Para = styled.p`
    font-style:italic;
    font-size:12px;
`

export const Hr = styled.hr`
    height:2px;
    background-color: #ffffff;
`

export const Button = styled.button`
    padding:10px 20px;
    background-color: ${ props => props.bgColor };
    border:none;
    color:#ffffff;
    border-radius:5px;
    cursor:pointer;
    width:150px;
    margin:10px 0;
    color:black;
    border:1px solid white;
    
    &:hover{
        color:black;
        background-color:yellow;
    }
`