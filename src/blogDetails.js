import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, erreur } = useFetch('http://localhost:8000/blogs/' + id);
    const h = useHistory();


    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            h.push('/');
        })
    }

    return (<div className="blog-details">
        {isPending && <div>LOADING....</div>}
        {erreur && <div>{erreur}</div>}
        {data && (
            <article>
                <h1>{data.title}</h1>
                <p>written by {data.author}</p>
                <div>{data.body}</div>
                <button onClick={handleClick}>delete</button>
            </article>
        )}
    </div>)

}

export default BlogDetails;