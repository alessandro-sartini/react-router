import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_URL_API_POSTS;

  const navigate = useNavigate(); 

  const [getSiglePost, setSinglePost] = useState({
    id: "",
    title: "",
    content: "",
    image: "",
    tags: [],
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/${id}`)
      .then((res) => setSinglePost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <div className="container my-4">
        <div className="container p-3">
          <h1>Singolo prodotto: {id}</h1>
        </div>

        <h2>Titolo: {getSiglePost.title}</h2>

        <p>{getSiglePost.content}</p>
        <ul>
          {getSiglePost.tags.map((tag, id) => {
            return <li key={id}>{tag}</li>;
          })}
        </ul>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          torna alla pagina precedente
        </button>
      </div>
    </>
  );
}
