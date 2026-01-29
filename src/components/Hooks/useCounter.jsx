import {  useState } from 'react'

export function useCounter() {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(true);

    const handleCountClick = () => {
        setCount((prev) => prev + 1)
    }

    const handleDisplay = () => {
        setIsShow((prev) => !prev)
    }

    return {count, isShow, handleCountClick, handleDisplay}
}
