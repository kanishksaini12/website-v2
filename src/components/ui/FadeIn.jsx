import React, { useState, useEffect, useRef } from "react";

// Utility for class merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

function useOnScreen(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
  return [ref, visible];
}

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
