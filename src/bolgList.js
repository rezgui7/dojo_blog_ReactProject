import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
    //const blogs =blogs.props;
    return (
        <div className="blog-list">
            <h2>{title}</h2>

            {blogs.map((a) => (
                <div className="blog-preview" key={a.id}>
                    <Link to = {`/blogs/${a.id}`}>
                    <h2>{a.title}</h2>
                    <br />
                    <p>writen by {a.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(a.id)}>click to delete</button>*/ }
                </div>
            ))
            }
        </div>
    );
}

export default BlogList;