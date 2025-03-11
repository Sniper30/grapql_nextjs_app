
import { HttpLink} from "@apollo/client";
import { registerApolloClient,  ApolloClient, InMemoryCache,} from "@apollo/experimental-nextjs-app-support";


export const {getClient,query} = registerApolloClient(()=>{
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "http://localhost:8000/graphql",
            credentials: 'include'
        })
    })
})

