/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./Landing_Page/**/*.{html,js,svg}"],
    theme: {
        extend: {
            colors: {
                primary: "#2D76F9",
                secondary: "#EEF4FF",
            },
            backgroundImage: {
                "up-dekstop":
                    "url('/Landing_Page/img/User_Paging_Dekstop.svg')",
                "up-mobile": "url('/Landing_Page/img/User_Paging_Mobile.svg')",
            },
        },
    },
    plugins: [],
};
