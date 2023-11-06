//CSS
import styles from './Dashboard.module.css'

//router
import { Link } from 'react-router-dom'

//hooks
import {useAuthValue} from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const posts = []

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencia seus posts.</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts.</p>
          <Link to='/posts/create' className='btn'>Criar Post</Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p> 
        </div>
      )}
    </div>
  )
}

export default Dashboard