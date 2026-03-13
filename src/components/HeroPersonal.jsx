import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import site from "../data/site";
import { fadeUp, heroContainer } from "../utils/animations";

export default function HeroPersonal() {
    return (
        <section className="hero-section">
            <div className="container hero-grid">
                <motion.div
                    className="hero-content"
                    variants={heroContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span className="eyebrow" variants={fadeUp}>
                        Personal Portfolio Template
                    </motion.span>

                    <motion.h1 variants={fadeUp}>{site.heroTitle}</motion.h1>
                    <motion.p variants={fadeUp}>{site.heroText}</motion.p>

                    <motion.div className="hero-actions" variants={fadeUp}>
                        <Link to="/projects" className="btn btn-accent">
                            {site.ctaPrimary}
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            {site.ctaSecondary}
                        </Link>
                        <a href={site.resumeUrl} className="btn btn-secondary">
                            Download CV
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-card"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <img src="/images/hero-person.jpg" alt={site.name} />
                </motion.div>
            </div>
        </section>
    );
}
