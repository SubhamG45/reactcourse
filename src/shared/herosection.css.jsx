import style from "styled-components"
export const Head = style.h1`
background-color:${props=> props.bgColor};
color:green;
padding:5px;
font-size:50px;

`
 export const Btn = style.button`
 background-Color:${props=> props.bgColor|| "pink"};
 color:${props=> props.color };
border:1px solid black;
   display: block;     
  margin-left: auto;   
  margin-right: auto;
  width:100px;
  padding:3px;
  border:none;
  border-radius:10px;
    &:hover {
    background-color: darkorange; 
    cursor: pointer;              
  }

`
//    export const Divu = style.div`
//    display:flex;
// justify-content:center;
// align-items:center;
//    `