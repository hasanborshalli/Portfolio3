import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import site from "../data/site";

export default function Navbar({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className="site-header">
                <div className="container nav-wrap">
                    <Link to="/" className="brand-logo" onClick={closeMenu}>
                        {site.name}
                    </Link>

                    <div className="nav-right">
                        <nav className="nav-links desktop-nav">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>

                        <button
                            type="button"
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? "☀" : "🌙"}
                        </button>

                        <button
                            type="button"
                            className={`menu-toggle ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label="Open menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`mobile-overlay ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            ></div>

            <aside className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>
                <div className="mobile-sidebar-top">
                    <span className="mobile-sidebar-title">Menu</span>
                    <button
                        className="sidebar-close"
                        onClick={closeMenu}
                        type="button"
                    >
                        ✕
                    </button>
                </div>

                <nav className="mobile-nav-links">
                    <NavLink to="/" onClick={closeMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/about" onClick={closeMenu}>
                        About
                    </NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </NavLink>
                </nav>
            </aside>
        </>
    );
}
