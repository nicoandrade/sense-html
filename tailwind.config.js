const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.css", "./src/**/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // Build your palette here
                sky: colors.sky,
                orange: colors.orange,
                cyan: colors.cyan,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
