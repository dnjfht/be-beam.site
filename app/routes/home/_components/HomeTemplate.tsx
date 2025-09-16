export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center pt-25 lg:pt-45">
      {children}
    </div>
  );
}
