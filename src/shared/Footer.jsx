import React from 'react'
import { Section, Div, Para, Hr , Button } from './Footer.css.jsx'

const Footer = () => {
  return (
    <>
    <Section>
      <Div>
        <h1> LOGO</h1>
        <Para> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit voluptatem velit quod error rerum rem iusto architecto inventore quas magni ad illum commodi corporis qui laboriosam fugiat, vero quidem! </Para>
        <Button bgColor="red">Subscribe</Button>
      </Div>
    </Section>

    <Hr />
      <Section>
        All right reserved by Bijay Chaudhary © {new Date().getFullYear()}
      </Section>
    </>
  )
}

export default Footer
