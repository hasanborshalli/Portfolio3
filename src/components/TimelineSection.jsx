import { motion } from "framer-motion";
import timeline from "../data/timeline";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function TimelineSection() {
    return (
        <section className="section section-soft">
            <div className="container">
                <motion.div
                    className="section-heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="eyebrow">Experience</span>
                    <h2>Professional Timeline</h2>
                    <p>
                        A simple and elegant section that makes this template
                        feel more personal.
                    </p>
                </motion.div>

                <motion.div
                    className="timeline"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {timeline.map((item) => (
                        <motion.article
                            key={item.id}
                            className="timeline-item"
                            variants={fadeUp}
                        >
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
