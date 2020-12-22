import { getList, getMovieById } from "../db";

const resolvers = {
    Query:{
        movie:(_,{id}) => getMovieById(id),
        movies: () => getList()
    }
}

export default resolvers;