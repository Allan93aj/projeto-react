/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {deleteFavorito, getFavoritos} from '../servicos/favoritos'
import livroImg from '../imagens/livro.png'


const AppContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }

`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
    margin: 0px;
`


function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

// Função para buscar os favoritos da API e atualizar o estado
  async function fetchFavoritos(){
    try {
      const favoritosDaAPI = await getFavoritos();
      setFavoritos(favoritosDaAPI);
    } catch (error) {
      console.error('Erro ao buscar os favoritos:', error);
    }
  }

  // Função para deletar um favorito por ID
  async function deletarFavorito(id){
    try {
      await deleteFavorito(id);
      await fetchFavoritos(); // Após deletar, buscar novamente os favoritos atualizados
      alert(`Item deletado dos Favoritos`);
    } catch (error) {
      console.error('Erro ao deletar o favorito:', error);
      alert('Erro ao deletar o favorito. Verifique o console para mais detalhes.');
    }
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <Titulo>Livros Favoritos</Titulo>
      <ResultadoContainer>
      {  
      favoritos.length !== 0 ? favoritos.map(favorito => (
        <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
          <img src={livroImg} />
          <p>{favorito.nome}</p>
        </Resultado>
      )): null 
    }
      </ResultadoContainer>
      
    </AppContainer>
  );
}

export default Favoritos;
