import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import site from "../data/site";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function AboutPreview() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className="split-layout"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.div variants={fadeUp}>
                        <span className="eyebrow">About Me</span>
                        <h2>
                            A Personal Website Built To Present Skills And Work
                            Clearly
                        </h2>
                        <p>{site.longBio}</p>
                        <Link to="/about" className="btn btn-outline">
                            Learn More
                        </Link>
                    </motion.div>

                    <motion.div className="image-panel" variants={fadeUp}>
                        <img src="/images/about.jpg" alt="About" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
