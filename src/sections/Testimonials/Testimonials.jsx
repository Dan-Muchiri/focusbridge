import React from 'react'
import styles from "./TestimonialsStyles.module.css"
import { IoArrowForward } from 'react-icons/io5';

const testimonialsData = [
    {
        id: 1,
        name: "Sarah Okumu",
        title: "Program Manager, InnovateTech",
        feedback: `"Focus Bridge provided exceptional academic and project writing services that elevated our grant proposal's impact. Their attention to detail and strategic approach ensured success."`,
    },
    {
        id: 2,
        name: "Michael Lee",
        title: "CEO, BridgePath Consulting",
        feedback: `"The team at Focus Bridge truly understands executive communication. Their support helped us deliver presentations with clarity and precision, boosting stakeholder confidence."`,
    },
    {
        id: 3,
        name: "Emily Mwangi",
        title: "Research Scholar",
        feedback: `"Focus Bridge’s guidance on my thesis was invaluable. Their academic expertise and constructive feedback made the process seamless and rewarding."`,
    },
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.heading}>Why Clients Trust Focus Bridge</h2>
            <div className={styles.testimonialGrid}>
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className={styles.testimonialCard}>
                        <p className={styles.feedback}>{testimonial.feedback}</p>
                        <h4 className={styles.name}>{testimonial.name}</h4>
                        <p className={styles.title}>{testimonial.title}</p>
                        <a href="#contact" className={styles.cta}>
                            Get in Touch <IoArrowForward />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
