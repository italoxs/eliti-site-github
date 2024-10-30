import { useState, useCallback, useEffect } from "react";
import { api } from "../../lib/axios";
import { IPost } from "../Home";
import { PostHeader } from "./componnets/PostHeader";
import { PostContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  useEffect(() => {
    getPosts()
  }, [])
  
  return (
    <>
      <PostContainer>
        <PostHeader isLoading={isLoading} postData={posts} />
        {!isLoading && <PostContent content={posts.body} />}
      </PostContainer>
    </>
  )
}