import { useEffect, useRef } from "react";

/**
 * A soft glow that follows the cursor, like the one on brittanychiang.com.
 * Skipped on touch/coarse-pointer devices where there's no cursor to follow.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
    };

    const handleLeave = () => {
      el.style.opacity = "0";
    };

    const animate = () => {
      // ease toward the cursor for a slightly trailing, organic feel
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 opacity-0 transition-opacity duration-500"
      style={{
        width: 700,
        height: 700,
        marginLeft: -350,
        marginTop: -350,
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(45,212,191,0.14) 0%, rgba(45,212,191,0.06) 35%, rgba(45,212,191,0) 70%)",
        willChange: "transform",
      }}
    />
  );
}