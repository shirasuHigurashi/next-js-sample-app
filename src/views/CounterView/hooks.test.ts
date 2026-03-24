import { describe, expect, it, test } from "vitest"
import { useCounterView } from "./hooks"
import { act, renderHook } from "@testing-library/react"

test('test', () => {
  expect("1").toBe("1")
})
test('error', () => {
  expect("2").toBe("2")
})

describe("testFunction", () => {
  it("渡した数値に1を足して返す", () => {
    const { result } = renderHook(() => useCounterView())
    const { testFunction } = result.current
    expect(testFunction(0)).toBe(1)
    expect(testFunction(5)).toBe(6)
    expect(testFunction(-3)).toBe(-2)
  })
})

describe("useCounterViewの関数のテスト", () => {
  it("初期状態の確認 count=0 / selectMode='both'", () => {
    const { result } = renderHook(() => useCounterView())
    expect(result.current.count).toBe(0)
    expect(result.current.selectMode).toBe("both")
  })

  it("handlePlusButtonClick が呼ばれたら count が 1 増える", () => {
    const { result } = renderHook(() => useCounterView())

    expect(result.current.count).toBe(0) // 初期値の確認
    act(() => {
      result.current.handlePlusButtonClick()
    })

    expect(result.current.count).toBe(1) // 更新後の count を確認
  })

  it("handleMinusButtonClick: count > 0 のとき 1 減る", () => {
    const { result } = renderHook(() => useCounterView())

    // まず 1 にする
    act(() => {
      result.current.handlePlusButtonClick()
    })
    expect(result.current.count).toBe(1)

    // 減る
    act(() => {
      result.current.handleMinusButtonClick()
    })
    expect(result.current.count).toBe(0)
  })

  it("handleMinusButtonClick: count=0 のとき減らない（0のまま）", () => {
    const { result } = renderHook(() => useCounterView())

    expect(result.current.count).toBe(0)
    act(() => {
      result.current.handleMinusButtonClick()
    })
    expect(result.current.count).toBe(0)
  })

  it("handleChangeMode: 渡したモードに切り替わる", () => {
    const { result } = renderHook(() => useCounterView())

    expect(result.current.selectMode).toBe("both")

    act(() => {
      result.current.handleChangeMode("plusOnly")
    })
    expect(result.current.selectMode).toBe("plus")

    act(() => {
      result.current.handleChangeMode("minusOnly")
    })
    expect(result.current.selectMode).toBe("minus")
  })
})