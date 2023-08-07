import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle]=useState('');
    const [author, setAuthor]=useState('mario');
    const [body, setBody]=useState('');
    const [pending, isPending]=useState(false);
    const h= useHistory();

    const handleSubmit= (e) => {
        e.preventDefault();
        const blog ={title, author, body};
        isPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new blog added');
            isPending(false);
            h.push('/');
        })

    }

    return (
        <div className="create">
            <h2> put all the blogs </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />
                <label>Blog body :</label>
                <textarea required 
                value={body}
                onChange={e=>setBody(e.target.value)}></textarea>
                <label>Blog author :</label>
                <select
                value={author}
                onChange={e=>(setAuthor(e.target.value))}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { pending && <button disabled>load blog...</button>}
                {!pending && <button>Add blog</button>}


                

            </form>
        </div>
    );
}

export default Create;