function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative border-t border-zinc-900 py-24 sm:py-28 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        {(eyebrow || title || description) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}

export default Section;
