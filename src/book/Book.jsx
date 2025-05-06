import React, { useState } from "react";
import styles from "./book.module.css";

const Book = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h2>Book hamburger</h2>
            <div
                className={`${styles.container} ${
                    isOpen ? styles.opened : styles.closed
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`${styles.bar} ${styles.top}`}></div>
                <div className={`${styles.bar} ${styles.middle}`}></div>
                <div className={`${styles.bar} ${styles.bottom}`}></div>
            </div>
        </div>
    );
};

export default Book;
