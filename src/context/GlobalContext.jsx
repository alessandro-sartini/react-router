import { createContext, useState, useContext } from "react";
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const apiUrl = import.meta.env.VITE_URL_API_POSTS;

    const [getPosts, setPosts] = useState([]);


    const [getSiglePost, setSinglePost] = useState({
        id: "",
        title: "",
        content: "",
        image: "",
        tags: [],
    });

    const fetchData = () => {
        
        axios.get(apiUrl).then((res) => setPosts(res.data));

    }
     //chimata api per la singola pizza
    const getPostId = (id) => {
        axios
            .get(`${apiUrl}/${id}`)
            .then((res) => setSinglePost(res.data))
                .catch((err) => console.error(err));
    };
    const value = {
        getPosts,
        getSiglePost,
        fetchData,
        getPostId
    }

    return (

        <GlobalContext.Provider value={value}>
        
            {children}
        
        </GlobalContext.Provider>

    )

};
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext}