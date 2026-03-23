"use client"

import { Mode,useCounterView } from "./hooks"


//useEffect は変更を検知して処理を実行することができる関数です。

export function CounterView(){
    type show = boolean
    const {
        count,
        handlePlusButtonClick,
        handleMinusButtonClick,
        handleChangeMode,
        selectMode,
        
    } =useCounterView()
    const modes:Mode[]= ["both","plusOnly","minusOnly"]
    const modeLabels:Record<Mode,string>={
        both:"両方表示",
        plusOnly:"プラスのみ",
        minusOnly:"マイナスのみ",
    }
    const showPlus:show = selectMode === "both" || selectMode ==="plusOnly"
    const showMinus:show = selectMode === "both" || selectMode ==="minusOnly"


    return(
        <div className="max-w-md mx-auto mt-10 text-center">
            
                <h1 className="text-2xl font-bold">カウンター</h1>
                <p className="text-4xl my-4">{count}</p>

                <div className="flex justify-center gap-4">
                    {showPlus &&
                    <button 
                    className ="px-4 py-2 rounded border border-gray-300 hover:gb-gray-50 active:scale-95"
                    onClick={handlePlusButtonClick}>プラス</button>
                    }
                    {showMinus &&
                    <button 
                    className ="px-4 py-2 rounded border border-gray-300 hover:gb-gray-50 active:scale-95"
                    onClick={handleMinusButtonClick}>マイナス</button>
                    } 
                </div>
                <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">表示ボタンモード</div>
                    <div className="flex flex-wrap gap-3">
                        {modes.map((mode)=>(
                            <label key={mode}className="inline-flex items-center gap-2">
                                <input
                                type="radio"
                                name="mode"
                                checked={mode===selectMode}
                                onChange={()=>handleChangeMode(mode)}

                            />
                            <span>{modeLabels[mode]}</span>
                            </label>
                        ))}
                    </div>
                </div>

        </div>
        
    )
}