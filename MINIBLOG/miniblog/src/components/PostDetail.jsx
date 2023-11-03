//CSS
import styles from './PostDetail.module.css'

//router
import { Link } from 'react-router-dom'

const PostDetail = ({post}) => {
  return (
    <div>
      <img src={post.image} alt={post.title}/>
      <h1>{post.title}</h1>
      <p>{post.createdBy}</p>
      <div>
        {post.tagsArray.map((tag) => (
          <p key={tag}><span>#</span>{tag}</p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
    </div>
  )
}

export default PostDetail