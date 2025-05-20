import { MoonIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6">
        <a
          href="#"
          className="flex items-center gap-1.5 text-sm/6 font-semibold"
        >
          <img alt="" src="/logo.png" className="h-8 w-auto" />
          LazyScrum
        </a>
        <div className="rounded-md border-1 border-gray-400 px-1.5 py-1.5">
          <MoonIcon className="h-4 w-4" />
        </div>
      </nav>
    </header>
  );
}
