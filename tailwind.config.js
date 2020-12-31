module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Raleway", "helvetica", "ubuntu", '"segoe ui"', "system-ui", "sans-serif"],
            serif: ["Lora", "serif"],
        },
        extend: {
            backgroundImage: (theme) => ({
                "hero-landing-image": 'url("assets/img/hero-landing-image.jpg")',
                "hero-frog-image": 'url("assets/img/frog-hero.jpg")',
            }),
            height: (theme) => ({
                "min-24": "min-height: 6rem",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
