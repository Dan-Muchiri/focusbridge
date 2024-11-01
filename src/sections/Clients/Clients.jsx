import React from 'react'
import styles from "./ClientsStyles.module.css"

function Clients() {
  return (
    <section id='clients' className={styles.container}>
        <h1>Consulting for today's world</h1>
        <div className={styles.separator}></div>
        <p>We thrive on challenges.</p>
        <p>We have an entrepreneurial DNA and a digital-driven mindset, helping our clients in unlocking their fullest potential and addressing the business challenges of the new digital paradigm</p>
        <div className={styles.boast}>
            <div className={styles.boast1}>
                <h1>2000+</h1>
                <p>Projects successfully delivered</p>
            </div>
            <div className={styles.boast1}>
                <h1>300+</h1>
                <p>Clients</p>
            </div>
            <div className={styles.boast1}>
                <h1>500+</h1>
                <p>Consultants</p>
            </div>
        </div>
    </section>
  )
}

export default Clients