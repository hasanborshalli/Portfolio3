import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import ProjectsSection from "../components/ProjectsSection";

export default function Projects() {
    return (
        <PageTransition>
            <PageHero
                title="Projects"
                text="A dedicated project page for case studies, work examples, and portfolio pieces."
            />
            <ProjectsSection />
        </PageTransition>
    );
}
