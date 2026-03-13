import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import projects from "../data/projects";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <PageTransition>
                <section className="section">
                    <div className="container narrow-container">
                        <h1>Project Not Found</h1>
                        <Link to="/projects" className="btn btn-accent">
                            Back to Projects
                        </Link>
                    </div>
                </section>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <section className="section">
                <div className="container narrow-container">
                    <span className="eyebrow">Project Detail</span>
                    <h1 className="detail-title">{project.title}</h1>

                    <div className="detail-image-wrap">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="stack-tags top-gap">
                        {project.stack.map((item, index) => (
                            <span key={index} className="stack-tag">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="detail-content">
                        <p>{project.description}</p>
                    </div>

                    <Link to="/projects" className="btn btn-outline">
                        Back to Projects
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
