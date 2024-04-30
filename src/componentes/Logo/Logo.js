import React from 'react'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'


const LogoLink =  styled.a`
  display: flex;
  text-decoration: none;
  color: #000;
`

const LogoContainer  = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImage  = styled.img`
  margin-right: 10px;
`


function Logo(){
  return (
    <LogoContainer>
        <LogoLink href='/'>
          <LogoImage src={logo} alt='Logo'/>
          <p><strong>Books</strong></p>
        </LogoLink>
    </LogoContainer>  
)
}

export default Logo