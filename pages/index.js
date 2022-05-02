// import fetch from "node-fetch";
import Link from "next/link";

function Blog({ posts }) {
    return(
        <ul>
            {posts.map((post) => {
                const split = post.Poster.split("/");
                const poster = split.slice(-1)[0];
                return (
                    <li>
                        <Link 
                        href="/img/[poster]" 
                        as={`img/${poster}`} 
                        target="_blank">
                            <a><h2>{post.Title}</h2></a>
                        </Link>
                    </li>
            )
            })}
        </ul>
    );
}

//getStaticProps is a function that gets called when the page is loaded.

// export async function getStaticProps() {
//     const res = await fetch("http://www.omdbapi.com/?s=avengers&apikey=d3353ed0");
//     const data = await res.json();
//     const posts = await data.Search;
//     return {
//         props: {
//             posts,
//         }
//     }
// }

export async function getServerSideProps() {
    const res = await fetch("http://www.omdbapi.com/?s=avengers&apikey=d3353ed0");
    const data = await res.json();
    const posts = await data.Search;
    return {
        props: {
            posts,
        }
    }
}

export default Blog;
