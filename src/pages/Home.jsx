import PageTransition from "../components/PageTransition";
import HeroPersonal from "../components/HeroPersonal";
import AboutPreview from "../components/AboutPreview";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import TimelineSection from "../components/TimelineSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function Home() {
    return (
        <PageTransition>
            <HeroPersonal />
            <AboutPreview />
            <SkillsSection />
            <ProjectsSection />
            <TimelineSection />
            <TestimonialsSection />
            <CTASection />
        </PageTransition>
    );
}
