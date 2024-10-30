import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../Home";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
  posts: IPost;
  isLoading: boolean;
}

export function PostHeader({ posts, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(posts?.created_at);

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink 
          as="button" 
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft}/>}
          text="Voltar" 
          variant="iconLeft"
        />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>{posts.title}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub}/>
          {posts.user.login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar}/>
          {formattedDate}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment}/>
          {posts.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}