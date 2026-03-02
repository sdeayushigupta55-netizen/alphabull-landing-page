export default function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="text-xs font-semibold tracking-widest text-gold-300/90 uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-2xl md:text-3xl font-semibold">{title}</h2>
      {desc && <p className="mt-3 text-white/70">{desc}</p>}
    </div>
  );
}
