function SectionBackground({ variant = "grid", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variant === "grid" && (
        <>
          <div className="section-grid absolute inset-0" />

          <div className="section-glow section-glow-purple absolute -left-40 top-1/4 h-96 w-96 rounded-full" />

          <div className="section-glow section-glow-cyan absolute -right-40 bottom-0 h-96 w-96 rounded-full" />
        </>
      )}

      {variant === "soft" && (
        <>
          <div className="section-glow section-glow-purple absolute left-1/4 top-0 h-80 w-80 rounded-full" />

          <div className="section-glow section-glow-cyan absolute bottom-0 right-1/4 h-72 w-72 rounded-full" />
        </>
      )}

      {variant === "radial" && (
        <div className="section-radial absolute inset-0" />
      )}

      {variant === "timeline" && (
        <>
          <div className="section-grid absolute inset-0" />

          <div className="section-glow section-glow-purple absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full" />
        </>
      )}

      {variant === "contact" && (
        <>
          <div className="section-grid absolute inset-0" />

          <div className="section-glow section-glow-purple absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />

          <div className="section-glow section-glow-cyan absolute left-1/3 top-1/3 h-72 w-72 rounded-full" />
        </>
      )}
    </div>
  );
}

export default SectionBackground;
