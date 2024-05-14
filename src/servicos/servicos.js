import axios from "axios";

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

async function getLivros() {
    const response = await livrosAPI.get("/")
    return response.data
}

function getLivroID(id) {
    const responseID = livrosAPI.get(`/${id}`)
    return responseID.data
}

export{
    getLivros,
    getLivroID
}