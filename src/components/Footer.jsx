import site from "../data/site";
import social from "../data/social";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <h3>{site.name}</h3>
                    <p>{site.role}</p>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p>{site.email}</p>
                    <p>{site.phone}</p>
                    <p>{site.location}</p>
                </div>

                <div>
                    <h4>Social</h4>
                    <ul>
                        {social.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© 2026 {site.name}. All rights reserved.</p>
                <a href="https://brndnglb.com" target="_blank">
                    <p>
                        Powered by <strong>Brndng.</strong>
                    </p>
                </a>
            </div>
        </footer>
    );
}
