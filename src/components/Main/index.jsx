import styles from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'
import { useCallback, useState } from 'react'
import ITEMS from 'src/data/LinkItems'

export function Main(props) {
    const [items, setItems] = useState(ITEMS);
    const handleReduce = useCallback(() => {
        setItems((prevItems => prevItems.slice(0, prevItems.length - 1)));
    }, [])
    return (
        <main className={styles.main}>
            <Headline page={props.page}>
                <code className={styles.code}>{items.length}</code>
            </Headline>
            <button onClick={handleReduce}>減らす</button>
            <Links items={items} />
        </main>
    )
}
