import styles from 'src/components/Links/Links.module.css'
import ITEMS from 'src/data/LinkItems'

export function Links() {
    return (
        <div className={styles.grid}>
            {ITEMS.map((item) => {
                return (
                    <a href={item.href} key={item.href} className={styles.card}>
                        <h3>{item.title}</h3>
                        <p>{item.discription}</p>
                    </a>
                )
            })}
        </div>
    )
}
