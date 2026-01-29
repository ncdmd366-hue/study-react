import { useState } from 'react'

export function useInputArray() {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleChange = (e) => {
        if (e.target.value.length > 10) {
            alert("10文字以内にしてください")
            return
        }
        setText(e.target.value)
    }

    // 追加ボタン押下時に配列へ追加
    const handleAdd = () => {
        if (!text.trim()) return
        setArray((prev) => [...prev, text])
    }
    
    return { text, array, handleChange, handleAdd }
}
