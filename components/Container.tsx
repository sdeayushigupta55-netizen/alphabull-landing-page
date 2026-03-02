export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[min(1268px,92%)] ${className}`}>{children}</div>
  );
}
