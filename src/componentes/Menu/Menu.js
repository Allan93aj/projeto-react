/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom" 

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const OpcaoLink = styled.a`
    text-decoration: none;
    color: #000;
`


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS',  'ESTANTE'] 

const Menu = () => {
  return (
    <Opcoes>
        {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLocaleLowerCase()}`}>
          <Opcao><OpcaoLink href='#'>{texto}</OpcaoLink></Opcao>
        </Link>
        ))}
    </Opcoes>
  )
}

export default Menu