import { useEffect,useState } from "react"

export type Mode = "both" |"plusOnly"| "minusOnly"

export const useCounterView=()=>{
    const [count,setCount]=useState(0)
    const [selectMode,setSelectMode] =useState<Mode>("both")

    const handlePlusButtonClick =()=>{
        console.log("プラスボタンが押されました。")
        setCount(count+1)
    }
    const handleMinusButtonClick=()=>{
        console.log("マイナスボタンが押されました。")
        if (count <=0)return
        setCount(count-1)
    }
    const handleChangeMode =(mode:Mode)=>{
        setSelectMode(mode)
    }

    useEffect(()=>{
        console.log("現在のカウント",count)
    },[count])

    return{
        count,
        handlePlusButtonClick,
        handleMinusButtonClick,
        handleChangeMode,
        selectMode,
    }

}

