import { motion } from "framer-motion";
import testimonials from "../data/testimonials";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function TestimonialsSection() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className="section-heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="eyebrow">Testimonials</span>
                    <h2>What People Say</h2>
                </motion.div>

                <motion.div
                    className="testimonials-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {testimonials.map((item) => (
                        <motion.article
                            key={item.id}
                            className="testimonial-card"
                            variants={fadeUp}
                        >
                            <p className="quote">“{item.quote}”</p>
                            <h4>{item.name}</h4>
                            <span>{item.role}</span>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
