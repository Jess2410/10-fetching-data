function Poster({img}) {
    return(
        <img src={img} alt="image" />
    );
}
export async function getStaticPaths() { 
    //Call external API to get results
    const res = await fetch("http://www.omdbapi.com/?s=avengers&apikey=d3353ed0");
    const data = await res.json();
    const posts = await data.Search;

    //Get the paths we want to pre-render
    const paths = posts.map(post => {
        const split = post.Poster.split("/");
        const poster = split[split.length - 1];
        return{
            params: {
                poster: poster}
        }
    });
    return {
        paths,
        fallback: false}
}

export async function getStaticProps({ params :{poster} }) {
    const img = `https://m.media-amazon.com/images/M/${poster}`;
    return {props: {img}};
}
export default Poster;