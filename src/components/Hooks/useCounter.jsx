import { useMemo, useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count])
    const [isShow, setIsShow] = useState(true);

    const handleCountClick = () => {
        setCount((prev) => prev + 1)
    }

    const handleDisplay = () => {
        setIsShow((prev) => !prev)
    }

    return { count, isShow, doubleCount, handleCountClick, handleDisplay }
}
