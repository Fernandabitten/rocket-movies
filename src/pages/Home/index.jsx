import { FiPlus } from "react-icons/fi"
import {Container, Content, Button, Title}  from './style';

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return(
    <div>
      <Header />
    
    <Container>

      <Title>
        <h1>Meus filmes</h1>
        <Button to="/create">
          <FiPlus />
          <span>Adiconar Filme</span>
        </Button>
      </Title>
      <Content> 
        <Section>
            <Note data={{
              title: 'Interestellar',
              rating: 4,
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
              tags: [
                {id: '1', name:'Ficção Científica'},
                {id: '2', name:'Drama'},
                {id: '3', name:'Família'}
              ],
            }}            
            />
            <Note data={{
              title: 'Interestellar',
              rating: 4,
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
              tags: [
                {id: '1', name:'Ficção Científica'},
                {id: '2', name:'Drama'},
                {id: '3', name:'Família'}
              ],
            }}/>
            <Note data={{
              title: 'Interestellar',
              rating: 4,
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
              tags: [
                {id: '1', name:'Ficção Científica'},
                {id: '2', name:'Drama'},
                {id: '3', name:'Família'}
              ],
            }}/>

          </Section>
      </Content>
    </Container>
    </div>
  )
}