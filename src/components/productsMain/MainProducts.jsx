import axios from "axios"
import { useState, useEffect } from "react"

export default function MainProducts() {
    // ! personaggi contenuti qua
    const [getCharacters, setCharacters]= useState([])

    // 
    const [page, setPage] = useState(1);

    const endpoint = 'https://rickandmortyapi.com/api/character?page='

    const fetchCharacters = (page) => {
        
        axios.get(endpoint + page)
            .then((res) => setCharacters(res.data.results))
            .catch((err) => console.error(err))


    };
    useEffect( () => fetchCharacters( page ), [ page ]);

    function goPrev() {
        
        setPage(page-1)

    }
    
    function goNext() {
        
        setPage(page+1)

    }


    return (
        

        <div className="container ">


            <div className="container d-flex my-3 justify-content-between">

                <button onClick={goPrev} className="btn btn-warning" disabled={(page===1)? true:false}>indietro</button>
                <button onClick={goNext} className="btn btn-warning"disabled={(page===42)? true:false}>avanti</button>

            </div>


            <div className="row row-cols-4 g-3 my-3">

                {
                    getCharacters.map((c) => {
                        return (
                            
                            <div className="col" key={c.id}>
                            <div className="card h-100" style={{ width: "18rem" }}>
                              <figure className="m-0">
                                <img className="card-img-top" src={c.image} alt={c.name} />
                              </figure>
                              <div className="card-body p-2">
                                <h3 className="card-title  m-0">{c.name}</h3>
                              </div>
                            </div>
                          </div>
                        )
                    })
                }


            </div>


        </div>

    )



}