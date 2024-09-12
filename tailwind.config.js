/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#eee",
        },
        white: "#fff",
        midnightblue: "#1e2772",
        darkslateblue: {
          "100": "#5259a6",
          "200": "rgba(82, 89, 166, 0.09)",
        },
        silver: "#c2c2c2",
        dimgray: "#555",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        "4xs-1": "8.1px",
      },
    },
    fontSize: {
      "base-2": "16.2px",
      "mini-1": "14.1px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
