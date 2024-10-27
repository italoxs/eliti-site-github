import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer to={"/Post/1"}>
      <div>
        <strong>Github API com React</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
      Exercitando a utilização da API do Github para buscar issues de um 
      repositório, dados do perfil e exibir elas como um blog...
      </p>
    </PostContainer>
  )
}