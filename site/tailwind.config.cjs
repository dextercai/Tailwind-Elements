module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.html",
    "./static/**/*.js",
    "./static/**/*.cjs",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("./static/js/plugin.cjs")],
  darkMode: "class",
  // for dynamic content
  safelist: [
    "bg-primary-100",
    "bg-success-100",
    "bg-warning-100",
    "border-primary-500",
    "border-success-500",
    "border-warning-500",
    "text-primary-700",
    "text-success-700",
    "text-warning-700",
    "hover:bg-primary-100",
    "hover:bg-success-100",
    "hover:bg-warning-100",
    "hover:bg-neutral-700",
    "hover:opacity-75",
    "dark:text-primary-200",
    "dark:text-success-200",
    "dark:text-warning-200",
    "dark:bg-primary-100/20",
    "dark:bg-success-100/20",
    "dark:bg-warning-100/20",
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-down_1s_ease-in-out]",
    "animate-[fade-in-left_1s_ease-in-out]",
    "animate-[fade-in-right_1s_ease-in-out]",
    "animate-[fade-in-up_1s_ease-in-out]",
    "animate-[fade-out_1s_ease-in-out]",
    "animate-[fade-out-down_1s_ease-in-out]",
    "animate-[fade-out-left_1s_ease-in-out]",
    "animate-[fade-out-right_1s_ease-in-out]",
    "animate-[fade-out-up_1s_ease-in-out]",
    "animate-[slide-in-down_1s_ease-in-out]",
    "animate-[slide-in-left_1s_ease-in-out]",
    "animate-[slide-in-right_1s_ease-in-out]",
    "animate-[slide-in-up_1s_ease-in-out]",
    "animate-[slide-out-down_1s_ease-in-out]",
    "animate-[slide-out-left_1s_ease-in-out]",
    "animate-[slide-out-right_1s_ease-in-out]",
    "animate-[slide-out-up_1s_ease-in-out]",
    "animate-[slide-down_1s_ease-in-out]",
    "animate-[slide-left_1s_ease-in-out]",
    "animate-[slide-right_1s_ease-in-out]",
    "animate-[slide-up_1s_ease-in-out]",
    "animate-[zoom-in_1s_ease-in-out]",
    "animate-[zoom-out_1s_ease-in-out]",
    "animate-[tada_1s_ease-in-out]",
    "animate-[spinner-grow_1s_ease-in-out]",
    "animate-[progress_3s_ease-in-out_infinite]",
  ],
};
