import { motion } from "framer-motion";

export default function HamburgerToggle({
  size = 23,
  stroke = "black",
  strokeWidth = 3,
  ariaLabel = "Toggle menu",
  open,
  setOpen
}) {

  const transition = { duration: 0.28, ease: "easeInOut" };

  const topVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };

  const middleVariant = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0.8 },
  };

  const bottomVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  return (
    <button
      className="mainbtn"
      onClick={() => setOpen((s) => !s)}
      aria-pressed={open}
      aria-label={ariaLabel}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 23 23"
        initial="closed"
        animate={open ? "open" : "closed"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 2 4 L 20 4"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          variants={topVariant}
          transition={transition}
          style={{ transformOrigin: "50% 50%" }}
        />

        <motion.path
          d="M 1 11.5 L 20 11.5"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          variants={middleVariant}
          transition={transition}
          style={{ transformOrigin: "50% 50%" }}
        />

        <motion.path
          d="M 2 19 L 20 19"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          variants={bottomVariant}
          transition={transition}
          style={{ transformOrigin: "50% 50%" }}
        />
      </motion.svg>
    </button>
  );
}
