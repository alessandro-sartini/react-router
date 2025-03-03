import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MainProducts() {
  const apiUrl = import.meta.env.VITE_URL_API_POSTS;
  const [getPosts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {getPosts.map((c) => (
          <div className="col" key={c.id}>
            <NavLink 
              to={`/products/${c.id}`} 
              className="text-decoration-none"
            >
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-body">
                  <h3 className="card-title mb-3 text-primary">
                    {c.title}
                  </h3>
                  <p className="card-text text-muted">
                    {c.content}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <span className=" text-warning">Click to view details</span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
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
