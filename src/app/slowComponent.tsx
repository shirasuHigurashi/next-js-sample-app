

export default async function SlowComponent(){
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return(
        <div>
            <h1>重いコンポーネント</h1>
        </div>
    )
}