"use client";

import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
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
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm/6 font-semibold"
          >
            Criar time <ArrowLongRightIcon className="size-6" />
          </a>
        </nav>
      </header>

      <div className="relative isolate flex h-full items-center justify-center px-6 pt-14 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Site que ajuda nas cerimonias do scrum
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Possui as funcionalidades de retropectiva da sprint e capacidade
              de realizar um planning poker para ajudar em estimar as
              atividades.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-secundary hover:bg-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Começar
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
