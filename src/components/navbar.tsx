import { Button } from "@headlessui/react";
import {
  ClockIcon,
  Cog6ToothIcon,
  ScaleIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6">
        <a
          href="#"
          className="flex items-center gap-1.5 text-sm/6 font-semibold"
        >
          <img alt="" src="/logo.png" className="h-8 w-auto" />
          LazyScrum
        </a>

        <div className="flex gap-2.5">
          <Link
            href="/planning-poker"
            className="hover:bg-white-500 cursor-pointer rounded-md border-1 border-gray-400 px-1.5 py-1.5"
          >
            <ScaleIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/retro-board"
            className="hover:bg-white-500 cursor-pointer rounded-md border-1 border-gray-400 px-1.5 py-1.5"
          >
            <ViewColumnsIcon className="h-4 w-4" />
          </Link>
          <Button className="hover:bg-white-500 cursor-pointer rounded-md border-1 border-gray-400 px-1.5 py-1.5">
            <ClockIcon className="h-4 w-4" />
          </Button>
          <Button className="hover:bg-white-500 cursor-pointer rounded-md border-1 border-gray-400 px-1.5 py-1.5">
            <Cog6ToothIcon className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
