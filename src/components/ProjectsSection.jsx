import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function ProjectsSection() {
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
                    <span className="eyebrow">Projects</span>
                    <h2>Selected Work</h2>
                    <p>
                        Showcase projects with title, stack, summary, and image.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            className="project-card"
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                        >
                            <img src={project.image} alt={project.title} />
                            <div className="project-card-body">
                                <h3>{project.title}</h3>
                                <div className="stack-tags">
                                    {project.stack.map((item, index) => (
                                        <span key={index} className="stack-tag">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <p>{project.summary}</p>
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="text-link"
                                >
                                    View Project
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
