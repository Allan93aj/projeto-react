import React from 'react'
import { livros } from './DadosUltimosLancamentos'
import imagemLivro from '../../imagens/angular11.png'
import styled from 'styled-components'
import {Titulos} from '../Titulos/Titulos'
import CardRecomenda from '../CardRecomenda/CardRecomenda'



const UltimosLancamentosContainer = styled.section`
  background: #eee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`


const NovosLivrosContainer = styled.div`
margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

const UltimosLancamentosimg = styled.img`
  width: 150px;
  margin: 0 10px;
`


const UltimosLancamentos = () => {
  return (
    <UltimosLancamentosContainer>
        <Titulos
            cor={"#EB9B00"}
            tamanhoFonte={"36px"}
        >
            ÚLTIMOS LANÇAMENTOS
        </Titulos>
        <NovosLivrosContainer>
            { livros.map( livro => (
                <UltimosLancamentosimg src={livro.src}/>
            ) ) }
        </NovosLivrosContainer>
        <CardRecomenda
            titulo="Talvez você se interesse por"
            subtitulo="Angular 11"
            descricao="Construindo uma aplicação com a plataforma Google"
            img={imagemLivro}
        />
    </UltimosLancamentosContainer>
)
}

export default UltimosLancamentos