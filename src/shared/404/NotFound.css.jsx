import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%,100%{
    transform:translateY(0px);
  }
  50%{
    transform:translateY(-18px);
  }
`;

const pulse = keyframes`
  0%,100%{
    transform:scale(1);
  }
  50%{
    transform:scale(1.05);
  }
`;

const shine = keyframes`
  from{
    transform:translateX(-150%);
  }
  to{
    transform:translateX(250%);
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e293b 50%,
    #312e81 100%
  );
  padding: 2rem;
  overflow: hidden;
  position: relative;
`;

export const Glow = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: #7c3aed;
  filter: blur(140px);
  opacity: 0.35;
  top: -120px;
  left: -120px;
`;

export const Glow2 = styled(Glow)`
  background: #06b6d4;
  top: auto;
  left: auto;
  bottom: -150px;
  right: -100px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 4rem;
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 30px;
  box-shadow: 0 30px 80px rgba(0,0,0,.45);

  @media (max-width:900px){
    grid-template-columns:1fr;
    text-align:center;
    padding:2.5rem;
  }
`;

export const Illustration = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  animation:${float} 5s ease-in-out infinite;
`;

export const Circle = styled.div`
  width:320px;
  height:320px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#06b6d4);
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  animation:${pulse} 4s infinite;

  &::before{
    content:'404';
    font-size:7rem;
    font-weight:900;
    color:white;
    letter-spacing:8px;
  }

  &::after{
    content:'';
    position:absolute;
    width:140%;
    height:40px;
    background:rgba(255,255,255,.2);
    transform:rotate(-25deg);
    animation:${shine} 4s linear infinite;
  }
`;

export const Content = styled.div`
  color:white;
`;

export const Badge = styled.span`
  display:inline-block;
  padding:8px 18px;
  border-radius:999px;
  background:rgba(255,255,255,.15);
  color:#cbd5e1;
  font-size:.9rem;
  margin-bottom:1.5rem;
`;

export const Title = styled.h1`
  font-size:4rem;
  font-weight:800;
  line-height:1.1;
  margin-bottom:1rem;

  span{
    color:#38bdf8;
  }

  @media(max-width:768px){
    font-size:2.8rem;
  }
`;

export const Description = styled.p`
  color:#cbd5e1;
  font-size:1.1rem;
  line-height:1.8;
  margin-bottom:2rem;
`;

export const ButtonGroup = styled.div`
  display:flex;
  gap:1rem;
  flex-wrap:wrap;

  @media(max-width:900px){
    justify-content:center;
  }
`;

export const PrimaryButton = styled.button`
  padding:15px 32px;
  border:none;
  border-radius:14px;
  background:linear-gradient(135deg,#8b5cf6,#06b6d4);
  color:white;
  font-size:1rem;
  font-weight:600;
  cursor:pointer;
  transition:.3s;

  &:hover{
    transform:translateY(-4px);
    box-shadow:0 15px 35px rgba(99,102,241,.45);
  }
`;

export const SecondaryButton = styled.button`
  padding:15px 32px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.2);
  background:transparent;
  color:white;
  font-size:1rem;
  cursor:pointer;
  transition:.3s;

  &:hover{
    background:rgba(255,255,255,.08);
  }
`;