import { FiSearch } from "react-icons/fi";
import { Container,Brand, Search, Profile, Logout } from "./styles";
import { Input } from "../../components/Input";

export function Header(){
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Search>
        <Input placeholder="Pessquisar pelo título" icon={FiSearch}/>
      </Search>
      <Profile>
        <div>        
          <strong>Fernanda Bittencourt</strong>
          <span>sair</span>
        </div>
        <img 
          src="https://github.com/Fernandabitten.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}