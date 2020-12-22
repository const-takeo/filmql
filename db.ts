import axios from "axios";

const api = axios.create({
    baseURL:"https://yts.mx/api/v2/",
    params:{
        limit:50
    }
})

export const getList = async () => {
    const result = await api.get("list_movies.json");
    const {data:{data:{movies}}} = result;
    return movies;
};

export const getMovieById = async (id: number) => {
    const result = await api.get("movie_details.json", {
        params:{
            movie_id:id
        }
    });
    const {data:{data:{movie}}} = result;
    return movie
}