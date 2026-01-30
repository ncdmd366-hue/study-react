import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleChange = useCallback(
        (e) => {
            if (e.target.value.length > 10) {
                alert("10文字以内にしてください")
                return
            }
            setText(e.target.value)
        }, [text])

    // 追加ボタン押下時に配列へ追加
    const handleAdd = useCallback(
        () => {
            setArray((prev) => {
                if (prev.includes(text)) {
                    alert("同じ要素が存在します。");
                    return prev;
                }
                return [...prev, text];
            })
        }, [text])

    return { text, array, handleChange, handleAdd }
}
