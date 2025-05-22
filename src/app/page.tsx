"use client";

import { Navbar } from "@/components/navbar";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="h-full bg-white">
      <Navbar />

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
              href="/retro-board"
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
