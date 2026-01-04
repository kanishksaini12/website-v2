import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      if (!cursor || !cursorInner) return;
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursorInner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive");
      if (isInteractive) {
        cursor.classList.add(
          "scale-[4]",
          "bg-[var(--accent)]",
          "mix-blend-difference"
        );
        cursorInner.classList.add("opacity-0");
      } else {
        cursor.classList.remove(
          "scale-[4]",
          "bg-[var(--accent)]",
          "mix-blend-difference"
        );
        cursorInner.classList.remove("opacity-0");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-6 h-6 border border-neutral-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out will-change-transform mix-blend-exclusion"
      />
      <div
        ref={cursorInnerRef}
        className="hidden md:block fixed top-0 left-0 w-1 h-1 bg-[var(--accent)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
