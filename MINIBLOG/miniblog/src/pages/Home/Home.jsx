// CSS
import styles from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
        <div className={styles.title_container}>
          <h1>Veja nossos post mais recentes.</h1>
        </div>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <div className={styles.search_form_container}>
          <input
            type="text"
            placeholder="Ou busque por tags..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-dark">Pesquisar</button>
        </div>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((post) => (
            <h3 key={post.id}>{<PostDetail post={post} />}</h3>
          ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts.</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post.
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
