import { Link } from 'react-router-dom';
import {Container, Form, Content}  from './style';
import {FiArrowLeft } from "react-icons/fi";

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />  
        <Form>
          <Link to="/" >
            <FiArrowLeft />
            <span>Voltar</span>  
          </Link>
          <Content>
            <header>     
              <h1>Novo filme</h1>            
            </header>
            
            <div className='inputs'>
              <span>
                <Input 
                  placeholder='Titulo'
                />
              </span>
              <span>
                <Input 
                  placeholder='Sua nota (de 0 a 5)'
                />
              </span>
            </div>

            <Textarea 
              placeholder='Observações'
            />

            <Section title="Marcadores">
              <div className='tags'>       
                  <NoteItem value="drama"/>      
                  <NoteItem isNew placeholder="Novo marcador"/>  
              </div>
            </Section>

            <div className='actions'>
              <span>
                <Button title="Excluir filme" style={{background: "#0D0C0F", color: "#FF859B"}} />
              </span>
            <span>
              <Button title="Salvar alterações" />
            </span>           
            </div>
          </Content>
        </Form>
    </Container>
  )
}