import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data && data.length > 0){
        return data;
    }

    console.log(" Aqui 1 ",data);

    return []
}

export const getPostsBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/posts?id=eq.${id}`)

    console.log(" Aqui 2 ",data);

    if(data && data.length > 0){
        return data;
    }

    return []
}