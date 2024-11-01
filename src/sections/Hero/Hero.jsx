import React from 'react'
import styles from "./HeroStyles.module.css"
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon

function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.left}>
            <div className={styles.leftWords}>
                <h1>We are FocusBridge Partners LTD</h1>
                <p>A business transformation organization that combines Technology, Analytics, and Management to unlock the potential of individuals and organizations.
                </p>
                <p>We're the partners of your transformation journey. #UnlockYourPotential</p>
            </div>
            <div className={styles.buttons}>
                <a href="#contact" className={styles.requestButton}>
                      Request a proposal
                </a>
                <a href="#services" className={styles.link}>
                Services <IoArrowForward />
                </a>
              </div>
        </div>
        <div className={styles.right}>
            <div className={styles.rightWords}>
                <h1>We are FocusBridge Partners LTD</h1>
                <p>A business transformation platform that combines Technology, Analytics, and Management to unlock the potential of individuals and organizations.
                </p>
            </div>
            <div className={styles.buttons}>
                <a href="#contact" className={styles.requestButton}>
                      Request a proposal
                </a>
                <a href="#services" className={styles.link}>
                Services <IoArrowForward />
                </a>
              </div>
            <h1 className={styles.rightH1}>Let's Collaborate.</h1>
        </div>
    </section>
  )
}

export default Hero