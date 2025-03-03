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
        <div className="container">
          {/* <h1>Singolo prodotto: {id}</h1> */}

        <h2 className="text-center m-3 text-warning">Titolo: {getSiglePost.title}</h2>

        <p  className="text-center m-3">{getSiglePost.content}</p>
        <ul className="list-group my-5">
          {getSiglePost.tags.map((tag, id) => {
            return <li className="list-group-item" key={id}>{tag}</li>;
          })}
        </ul>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          torna alla pagina precedente
        </button>
        </div>
      </div>
    </>
  );
}
