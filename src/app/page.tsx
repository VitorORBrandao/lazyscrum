"use client";

import { ArrowLongRightIcon, MoonIcon } from "@heroicons/react/16/solid";

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
          <div className="rounded-md border-1 border-gray-400 px-1.5 py-1.5">
            <MoonIcon className="h-4 w-4" />
          </div>
        </nav>
      </header>

      <div className="relative isolate flex h-full items-center justify-center px-6 pt-14 lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-semibold text-black sm:text-7xl">
            Simplifique suas cerimônias Scrum
          </h1>
          <p className="mt-8 text-lg text-gray-500 sm:text-xl/8">
            Ferramentas para retrospectivas e planning poker, otimizando a
            colaboração do seu time e facilitando a estimativa de tarefas.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="/retro"
              className="bg-secundary hover:bg-primary flex items-center justify-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              Entrar
              <ArrowLongRightIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
