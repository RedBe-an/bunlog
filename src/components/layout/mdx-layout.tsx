export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`font-BunFnNeo grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-15 sm:p-20`}
    >
      <main className="flex flex-col row-start-2 items-center sm:items-start">
          {children}
      </main>
    </div>
    
  );
}
