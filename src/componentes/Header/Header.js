/* eslint-disable react/style-prop-object */
import React from 'react'
import Logo from '../../componentes/Logo/Logo';
import Menu from '../../componentes/Menu/Menu';
import Icones from '../../componentes/Icones/Icones';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-around;
`


const Header = () => {
  return (
    <HeaderContainer>
        <Link to="/">
        <Logo/>
        </Link>
        <Menu/>
        <Icones/>
    </HeaderContainer>
    
  )
}

export default Header