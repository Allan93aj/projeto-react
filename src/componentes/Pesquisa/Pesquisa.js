import React, { useEffect } from 'react'
import Input from '../Input/Input'
import styled from 'styled-components'
import { useState } from 'react'
import { getLivros } from '../../servicos/servicos'
import { postFavorito } from '../../servicos/favoritos'


const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`
const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;    

`
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
`


const Pesquisa = () => {
  const [livroPesquisados, setLivroPesquisados] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros(){
    const livrosDaApi = await getLivros()
    setLivros(livrosDaApi)
  }

  async function insertFavorito(id){
    try {
      await postFavorito(id)
      alert('Livro adicionado aos favoritos')
    } catch (error) {
      console.error('Houve um problema com a chamada postFavorito: ', error)
    }
  }

  return (
    <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
        <Input 
          placeholder='Escreva sua proxima leitura'
          onBlur={evento => {
            const textoDigitado = evento.target.value
            const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
            setLivroPesquisados(resultadoPesquisa)
          }}
          />
        {livroPesquisados.map(livro => (
          <Resultado onClick={() => insertFavorito(livro.id)}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={livro.src}/>
            <p>{livro.nome}</p>
          </Resultado>
        ))}
    </PesquisaContainer>
  )
}

export default Pesquisa