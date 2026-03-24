type Post ={
    id:string;
    title:string
}


export default async function Home(){

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts:Post[] = await  res.json();

    return(
        <div>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}