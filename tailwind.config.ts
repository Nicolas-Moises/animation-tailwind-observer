import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        "fade-in-right": {
          "0%": {
            "opacity": "0",
            "transform": "translateX(-20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateX(0)"
          }
        },
        "fade-in": {
          "0%": {
            "opacity": "0"
          },
          "100%": {
            "opacity": "1"
          }
        },
        "fade-in-down": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(-20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
        "fade-in-up": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            "opacity": "0",
            "transform": "translateX(20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateX(0)"
          }
        },
        "slide-in-left": {
          "0%": {
            "transform": "translateX(-20px)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        },
        "fade-out": {
          "0%": {
            "opacity": "1"
          },
          "100%": {
            "opacity": "0"
          }
        },
        "tada": {
          "0%": {
            "transform": "scale(1)"
          },
          "10%": {
            "transform": "scale(0.9) rotate(-3deg)"
          },
          "20%": {
            "transform": "scale(0.9) rotate(-3deg)"
          },
          "30%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "40%": {
            "transform": "scale(1.1) rotate(-3deg)"
          },
          "50%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "60%": {
            "transform": "scale(1.1) rotate(-3deg)"
          },
          "70%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "80%": {
            "transform": "scale(1.1) rotate(-3deg)"
          },
          "90%": {
            "transform": "scale(1.1) rotate(3deg)"
          },
          "100%": {
            "transform": "scale(1) rotate(0)"
          }
        },
        "slide-in-right": {
          "0%": {
            "transform": "translateX(20px)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        },
        "slide-in-top": {
          "0%": {
            "transform": "translateY(-60px)"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        },
        "slide-in-bottom": {
          "0%": {
            "transform": "translateY(60px)"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-in",
        "fade-out": "fade-out 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-in-out",
        "fade-in-left": "fade-in-left 0.6s ease-in-out",
        "fade-in-down": "fade-in-down 0.6s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-top": "slide-in-top 0.6s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-out",
        "tada": "tada 1s ease-in-out"
      }
    },
  },
  plugins: [],
};
export default config;
