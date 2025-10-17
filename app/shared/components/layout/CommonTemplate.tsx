export default function CommonTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1480px] p-4 pt-25 pb-8 lg:p-0 lg:pt-34 lg:pb-16">
      {children}
    </div>
  );
}
