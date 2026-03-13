import { motion } from "framer-motion";
import skills from "../data/skills";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function SkillsSection() {
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
                    <span className="eyebrow">Skills</span>
                    <h2>Tools And Technologies I Work With</h2>
                    <p>
                        A structured way to show expertise for freelancers and
                        personal brands.
                    </p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {skills.map((group, index) => (
                        <motion.article
                            key={index}
                            className="skill-card"
                            variants={fadeUp}
                        >
                            <h3>{group.group}</h3>
                            <div className="skill-tags">
                                {group.items.map((item, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
