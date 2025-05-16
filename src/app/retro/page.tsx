"use client";

export default function Retro() {
  return (
    <main className="h-full bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6">
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm/6 font-semibold"
          >
            <img alt="" src="/logo.png" className="h-8 w-auto" />
            LazyScrum
          </a>
        </nav>
      </header>
    </main>
  );
}
