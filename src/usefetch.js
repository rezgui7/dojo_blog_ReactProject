import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [erreur, setErreur] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(resp => {
                    if (!resp.ok) {
                        throw Error('catch it catch it hey!!')
                    }
                    console.log(resp);
                    return resp.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setErreur(null);
                })
                .catch(e => {
                    if (e.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setErreur(e.message);
                    }
                })
        }, 1000)
        return () => abortCont.abort();

    }, [url])


    return { data, isPending, erreur };
}

export default useFetch;