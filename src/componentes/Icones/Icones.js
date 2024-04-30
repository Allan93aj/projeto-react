/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components';



const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`

const IconeContainer = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`



const icones = [perfil, sacola]

const Icones = () => {
  return (
    <IconesContainer>
        {icones.map((icone) => (
        <IconeContainer><img src={icone}/></IconeContainer>
        ))}
    </IconesContainer>
  )
}

export default Icones