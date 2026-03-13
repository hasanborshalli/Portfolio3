import { motion } from "framer-motion";
import { fadeUp, heroContainer } from "../utils/animations";

export default function PageHero({ title, text }) {
    return (
        <section className="page-hero">
            <motion.div
                className="container"
                variants={heroContainer}
                initial="hidden"
                animate="show"
            >
                <motion.span className="eyebrow" variants={fadeUp}>
                    Personal Portfolio
                </motion.span>
                <motion.h1 variants={fadeUp}>{title}</motion.h1>
                {text && <motion.p variants={fadeUp}>{text}</motion.p>}
            </motion.div>
        </section>
    );
}
