export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const heroContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.08,
        },
    },
};
