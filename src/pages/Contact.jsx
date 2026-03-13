import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import site from "../data/site";
import social from "../data/social";

export default function Contact() {
    return (
        <PageTransition>
            <PageHero
                title="Contact Me"
                text="Use this page for inquiries, project requests, collaborations, or consulting."
            />

            <section className="section">
                <div className="container contact-layout">
                    <div>
                        <span className="eyebrow">Get In Touch</span>
                        <h2>Let’s Build Something Useful</h2>
                        <p>
                            <strong>Email:</strong> {site.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {site.phone}
                        </p>
                        <p>
                            <strong>Location:</strong> {site.location}
                        </p>

                        <div className="social-list">
                            {social.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Subject" />
                        <textarea
                            rows="6"
                            placeholder="Tell me about your project"
                        ></textarea>
                        <button type="button" className="btn btn-accent">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </PageTransition>
    );
}
