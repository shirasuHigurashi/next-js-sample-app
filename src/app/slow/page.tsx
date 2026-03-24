import { Suspense } from "react";
import SlowComponent from "../slowComponent";


export default async function Home(){

    return(
        <div>
            <h1>早いのだけ先に表示したいのよコンポーネント</h1>
            
            {/* <Suspense fallback={<div>重いコンポーネントを読み込み中。。。</div>}> */}
                <SlowComponent/>
            {/* </Suspense> */}
            
        </div>
    )
}