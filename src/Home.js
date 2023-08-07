import { useState, useEffect , useMemo} from "react";
import BlogList from "./bolgList";
//import { DATA_BLOG } from './shared/blogs'
import useFetch from "./usefetch";

const Home = () => {
    const {data, isPending, erreur} =useFetch( 'http://localhost:8000/blogs' );
    
    

    return (

        <div className="home">
            {erreur &&<div>{erreur}</div> }
            {isPending && <div>LOADING....</div>}
            {data && <BlogList blogs={data} title="all blogs" /*handleDelete={handleDelete}*/ />}
            
        </div>

    );
};

export default Home;
