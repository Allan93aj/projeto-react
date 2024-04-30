/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

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


const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS', ] 

const Menu = () => {
  return (
    <Opcoes>
        {textoOpcoes.map((texto) => (
        <Opcao><OpcaoLink href='#'>{texto}</OpcaoLink></Opcao>
        ))}
    </Opcoes>
  )
}

export default Menu