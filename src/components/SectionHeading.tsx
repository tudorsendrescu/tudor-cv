export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="flex items-baseline gap-3 mb-8 text-2xl font-semibold text-slate-100">
      <span className="font-mono text-accent text-lg">{index}.</span>
      {title}
      <span className="hidden sm:block flex-1 h-px bg-white/10 ml-2" />
    </h2>
  );
}
