import styles from 'src/components/Links/Links.module.css'

export const Links = ({ items }) => {

    return (
        <div className={styles.grid}>
            {items.map((item) => {
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
