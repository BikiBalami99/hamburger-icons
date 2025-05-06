import styles from "./Accessible.module.css";

const Accessible = () => {
    return (
        <div>
            <label className={styles.hamburgerMenu}>
                <input type="checkbox" />
            </label>
            <aside className={styles.sidebar}>
                <nav>
                    <div>This</div>
                    <div>uses</div>
                    <div>only</div>
                    <div>CSS</div>
                    <div>woah</div>
                    <div>It's also accessible!</div>
                </nav>
            </aside>
        </div>
    );
};

export default Accessible;
