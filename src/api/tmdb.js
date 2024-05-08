import axios from "axios";

export async function getData(tipo, dataset){

    let categoria = tipo == 'filmes' ? 'movie' : 'tv'

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${dataset}`,{
            params: {
                api_key: 'e511c1f8f4b145b51f9e916fa1d5098f',
                page: 1,
                language: 'pt-BR'
            }
        })

        return {data: response.data.results}

    } catch (error) {
        console.log(error)
    }
}

export async function getDataId(tipo, id){

    let categoria = tipo == 'filmes' ? 'movie' : 'tv'
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${id}`,{
            params: {
                api_key: 'e511c1f8f4b145b51f9e916fa1d5098f',
                language: 'pt-BR'
            }
        })
        return {data: response.data}

    } catch (error) {
        console.log(error)
    }
}