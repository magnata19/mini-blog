//css 
import styles from './Post.module.css'

//router 
import { useParams } from 'react-router-dom'

//hooks 
import { useFetchDocument } from '../../hooks/useFetchDoment'

const Post = () => {
  const {id} = useParams()
  const {document: post, loading} = useFetchDocument('posts', id)

  return (
    <div>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
        <h1>{post.title}</h1>
        </>
      )}
    </div>
  )
}

export default Post