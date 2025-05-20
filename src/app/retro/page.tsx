"use client";

import { Navbar } from "@/components/navbar";
import { RetroColumn } from "@/components/retro-column";
import { Button } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Retro() {
  return (
    <main className="flex h-full flex-col">
      <Navbar />

      <div className="mt-24 flex items-center justify-between px-6">
        <p className="font-semibold">Individual cards</p>
        <ChevronRightIcon className="h-4 w-4" />
        <p>All cards</p>
        <ChevronRightIcon className="h-4 w-4" />
        <p>Individual votes</p>
        <ChevronRightIcon className="h-4 w-4" />
        <p>All votes</p>
        <ChevronRightIcon className="h-4 w-4" />
        <p>Action items</p>
      </div>

      <hr className="mx-6 mt-4 rounded-md"></hr>

      <div className="relative isolate mt-4 flex flex-auto gap-3 px-6 pb-6">
        <RetroColumn title="Kudos" />
        <RetroColumn title="Went well" />
        <RetroColumn title="Need to improve" />
        <RetroColumn title="Action items" />
      </div>

      <Button className="bg-secundary text-whitebg-secundary hover:bg-primary fixed right-10 bottom-10 flex cursor-pointer items-center justify-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white">
        Continue <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </main>
  );
}
