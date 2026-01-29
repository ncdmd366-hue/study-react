import styles from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'
import { useCallback, useEffect, useState } from 'react'

export function Main(props) {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('hello');
    const [isShown, setIsShown] = useState(true);

    const handleDisplay = () => setIsShown(prev => !prev);
    const handleClick = () => setCount(count + 1);
    const handleChange = (e) => {
        if (e.target.value.length > 10) {
            // 5文字を超えたらアラートを出して、set Textをスキップ
            alert("10文字以内にしてください");
            return;
        }
        setText(e.target.value);
    }

    useEffect(() => {
        if (count > 5) {
            setCount(0);
        }
    }, [count])

    return (
        <main className={styles.main}>
            <button onClick={handleDisplay}>{isShown ? 'ボタン表示' : 'ボタン非表示'}</button>
            {isShown ? <button onClick={handleClick}>カウント：{count}</button> : ""}
            <br />
            <input value={text} onChange={handleChange} />
            <p>Your type is {text}</p>
            <Headline page={props.page}>
                <code className={styles.code}>pages/{props.page}.js</code>
            </Headline>
            <Links />
        </main>
    )
}
