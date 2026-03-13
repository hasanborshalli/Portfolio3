import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function CTASection() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className="cta-box"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="eyebrow">Let’s Work Together</span>
                    <h2>Need A Website, System, Or Digital Product?</h2>
                    <p>
                        This section is perfect for freelancers and personal
                        brands who want to turn visitors into leads.
                    </p>
                    <Link to="/contact" className="btn btn-accent">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
