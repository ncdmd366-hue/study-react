import styles from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'
import { useCallback, useEffect } from 'react'

export function Main(props) {

    const handleClick = useCallback((e) => {
        e.preventDefault();
        alert("クリックされました。");
    }, [])

    useEffect((() => {
        // 初回表示（マウント）時の処理（Mainの初回利用時）
        document.body.style.backgroundColor = "lightblue";
        // アンマウント時の処理
        return () => {
            document.body.style.backgroundColor = "";
        }
    }), [])

    return (
        <main className={styles.main}>
            <Headline page={props.page}>
                <code className={styles.code}>pages/{props.page}.js</code>
            </Headline>
            <a href="/about" onClick={handleClick}>ボタン</a>
            <Links />
        </main>
    )
}
