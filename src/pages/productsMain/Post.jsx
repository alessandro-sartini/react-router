import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const {id} = useParams();
  const apiUrl = import.meta.env.VITE_URL_API_POSTS;

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
  },
    [id]);

  return (
    <>
      <h1>Singolo prodotto: {id}</h1>
      <h2>Titolo: {getSiglePost.title}</h2>

        <ul>
              
        {getSiglePost.tags.map((tag, id) => {
            return (
                <li key={id}>{tag}</li>
            )
        })}
              
      </ul>
    </>
  );
}
