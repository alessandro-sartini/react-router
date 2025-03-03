import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MainProducts() {
  // const apiUrl = import.meta.env.URL_API_POSTS;
  const apiUrl = "http://localhost:3000/api/posts";
  const [getPosts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container ">
      <div className="container d-flex my-3 justify-content-between"></div>

      <div className="row row-cols-4 g-3 my-3">
        {getPosts.map((c) => {
          return (
            <div className="col">
              <NavLink
                to={`/products/${c.id}`}
                key={c.id}
                className="card h-100"
                style={{ width: "18rem" }}
              >
                <div className="card-body p-2">
                  <h3 className="card-title  m-0">{c.title}</h3>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// // ! personaggi contenuti qua
// const [getCharacters, setCharacters]= useState([])

// const [page, setPage] = useState(1);

// const endpoint = 'https://rickandmortyapi.com/api/character?page='

// const fetchCharacters = (page) => {

//     axios.get(endpoint + page)
//         .then((res) => setCharacters(res.data.results))
//         .catch((err) => console.error(err))

// };
// useEffect( () => fetchCharacters( page ), [ page ]);

// function goPrev() {

//     setPage(page-1)

// }

// function goNext() {

//     setPage(page+1)

// }

// return (

//     <div className="container ">

//         <div className="container d-flex my-3 justify-content-between">

//             <button onClick={goPrev} className="btn btn-warning" disabled={(page===1)? true:false}>indietro</button>
//             <button onClick={goNext} className="btn btn-warning"disabled={(page===42)? true:false}>avanti</button>

//         </div>

//         <div className="row row-cols-4 g-3 my-3">

//             {
//                 getCharacters.map((c) => {
//                     return (

//                         <div className="col" key={c.id}>
//                         <div className="card h-100" style={{ width: "18rem" }}>
//                           <figure className="m-0">
//                             <img className="card-img-top" src={c.image} alt={c.name} />
//                           </figure>
//                           <div className="card-body p-2">
//                             <h3 className="card-title  m-0">{c.name}</h3>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                 })
//             }

//         </div>

//     </div>

// )
