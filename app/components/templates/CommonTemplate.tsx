export default function CommonTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto w-full max-w-[1480px] py-16">{children}</div>;
}
