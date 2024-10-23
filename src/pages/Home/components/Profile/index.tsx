import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src={"http://github.com/italoxs.png"}/>

      <ProfileDetails>
        <header>
          <h1>Italo Sales</h1>
          <ExternalLink text="Github" href="#" />
        </header>

        <p>
          Olá, me chamo Italo e sou um admirador da tecnologia, buscando sempre 
          aprender coisas novas e estudando a necessidade que o mercado requer. 
          Muito prazer!
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/>
            italoxs
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            Eliti
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}