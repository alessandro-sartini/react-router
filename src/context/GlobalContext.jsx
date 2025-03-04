// Importazione dei moduli necessari da React e axios
import { createContext, useState, useContext } from "react";
import axios from "axios";

// Creazione del contesto globale
// Questo contesto sarà usato per condividere dati e funzioni tra i componenti
const GlobalContext = createContext();

// Definizione del componente GlobalProvider
// Questo componente fornisce il contesto ai suoi figli (children)
const GlobalProvider = ({ children }) => {

  const apiUrl = import.meta.env.VITE_URL_API_POSTS;

  // Stato per memorizzare la lista di tutti i posts
  // Inizializzato come array vuoto
  const [getPosts, setPosts] = useState([]);

  // Stato per memorizzare i dettagli di un singolo post
  // Inizializzato con un oggetto con proprietà vuote
  const [getSiglePost, setSinglePost] = useState({
    id: "",
    title: "",
    content: "",
    image: "",
    tags: [],
  });

  // Funzione per recuperare tutti i posts dall'API
    const fetchData = () => {
      
    // Fa una richiesta GET con axios all'URL dell'API
    // Aggiorna lo stato 'getPosts' con i dati ricevuti
        
    axios.get(apiUrl).then((res) => setPosts(res.data));
  };

  // Funzione per recuperare un singolo post in base al suo ID
  const getPostId = (id) => {
    // Costruisce l'URL per il singolo post
    // Fa una richiesta GET e aggiorna lo stato 'getSiglePost'
    axios
      .get(`${apiUrl}/${id}`)
        .then((res) => setSinglePost(res.data))
        
      .catch((err) => console.error(err));
  };

  // Oggetto che contiene i valori da condividere tramite il contesto
  const value = {
    getPosts, 
    getSiglePost, 
    fetchData, 
    getPostId,  
  }

  // Ritorna il provider del contesto
  // Passa l'oggetto 'value' al contesto e rende i figli accessibili al contesto
  return (
      <GlobalContext.Provider value={value}>
          {children}
      </GlobalContext.Provider>
  );
};

// Hook personalizzato per accedere facilmente al contesto
// Semplifica l'uso del contesto nei componenti
const useGlobalContext = () => useContext(GlobalContext);

// Esportazione del provider e dell'hook per usarli altrove
export { GlobalProvider, useGlobalContext };
