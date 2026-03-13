import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import site from "../data/site";

export default function About() {
    return (
        <PageTransition>
            <PageHero
                title="About Me"
                text="A personal portfolio template made for freelancers, creators, and professionals."
            />

            <section className="section">
                <div className="container narrow-container">
                    <p>{site.longBio}</p>
                    <p>
                        This template is intentionally more personal than the
                        first two portfolio templates. It focuses on identity,
                        skills, work, and professional story.
                    </p>
                </div>
            </section>
        </PageTransition>
    );
}
