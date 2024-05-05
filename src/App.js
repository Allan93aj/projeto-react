/* eslint-disable jsx-a11y/alt-text */
import Header from './componentes/Header/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos/UltimosLancamentos';


const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
