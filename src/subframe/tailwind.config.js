module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(245, 245, 255)",
          100: "rgb(229, 231, 255)",
          200: "rgb(198, 200, 240)",
          300: "rgb(177, 180, 226)",
          400: "rgb(125, 132, 197)",
          500: "rgb(105, 106, 186)",
          600: "rgb(94, 90, 170)",
          700: "rgb(79, 74, 140)",
          800: "rgb(68, 64, 114)",
          900: "rgb(55, 54, 83)",
        },
        neutral: {
          0: "rgb(255, 255, 255)",
          50: "rgb(250, 250, 250)",
          100: "rgb(244, 244, 245)",
          200: "rgb(228, 228, 231)",
          300: "rgb(212, 212, 216)",
          400: "rgb(161, 161, 170)",
          500: "rgb(113, 113, 122)",
          600: "rgb(82, 82, 91)",
          700: "rgb(63, 63, 70)",
          800: "rgb(39, 39, 42)",
          900: "rgb(24, 24, 27)",
          950: "rgb(9, 9, 11)",
        },
        error: {
          50: "rgb(254, 242, 242)",
          100: "rgb(254, 226, 226)",
          200: "rgb(254, 202, 202)",
          300: "rgb(252, 165, 165)",
          400: "rgb(248, 113, 113)",
          500: "rgb(239, 68, 68)",
          600: "rgb(220, 38, 38)",
          700: "rgb(185, 28, 28)",
          800: "rgb(153, 27, 27)",
          900: "rgb(127, 29, 29)",
        },
        warning: {
          50: "rgb(255, 247, 237)",
          100: "rgb(255, 237, 213)",
          200: "rgb(254, 215, 170)",
          300: "rgb(253, 186, 116)",
          400: "rgb(251, 146, 60)",
          500: "rgb(249, 115, 22)",
          600: "rgb(234, 88, 12)",
          700: "rgb(194, 65, 12)",
          800: "rgb(154, 52, 18)",
          900: "rgb(124, 45, 18)",
        },
        success: {
          50: "rgb(236, 253, 245)",
          100: "rgb(209, 250, 229)",
          200: "rgb(167, 243, 208)",
          300: "rgb(110, 231, 183)",
          400: "rgb(52, 211, 153)",
          500: "rgb(16, 185, 129)",
          600: "rgb(5, 150, 105)",
          700: "rgb(4, 120, 87)",
          800: "rgb(6, 95, 70)",
          900: "rgb(6, 78, 59)",
        },
        "brand-primary": "rgb(94, 90, 170)",
        "default-font": "rgb(24, 24, 27)",
        "subtext-color": "rgb(113, 113, 122)",
        "neutral-border": "rgb(228, 228, 231)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(250, 250, 250)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "600",
            letterSpacing: "-0.025em",
          },
        ],
        "heading-2": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
            letterSpacing: "-0.025em",
          },
        ],
        "heading-1": [
          "36px",
          {
            lineHeight: "40px",
            fontWeight: "600",
            letterSpacing: "-0.025em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Inter",
        "caption-bold": "Inter",
        body: "Inter",
        "body-bold": "Inter",
        "heading-3": "Inter",
        "heading-2": "Inter",
        "heading-1": "Inter",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
        overlay:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        DEFAULT: "8px",
        lg: "12px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
