import { useEffect,useState } from "react"

export const useCounterView=()=>{
    const [count,setCount]=useState(0)
    const handlePlusButtonClick =()=>{
        console.log("プラスボタンが押されました。")
        setCount(count+1)
    }
    const handleMinusButtonClick=()=>{
        console.log("マイナスボタンが押されました。")
        if (count <=0)return
        setCount(count-1)
    }

    useEffect(()=>{
        console.log("現在のカウント",count)
    },[count])

    return{
        count,
        handlePlusButtonClick,
        handleMinusButtonClick
    }

}

