import { Navbar } from "@/components/navbar";
import { PokerCard } from "@/components/poker-card";

export default function Retro() {
  return (
    <main className="flex h-full flex-col px-6 pb-6">
      <Navbar />

      <div className="mt-24 flex w-full flex-auto flex-col items-center justify-center gap-3">
        <PokerCard content="x" />
        <div className="flex h-50 w-100 items-center justify-center rounded-full border-1 border-black">
          1/1
        </div>
        <PokerCard content="x" />
      </div>

      <div className="bottom-6 flex w-full justify-center gap-2.5">
        <PokerCard content="?" />
        <PokerCard content="1" />
        <PokerCard content="2" />
        <PokerCard content="3" />
        <PokerCard content="5" />
        <PokerCard content="8" />
        <PokerCard content="13" />
        <PokerCard content="21" />
        <PokerCard content="∞" />
      </div>
    </main>
  );
}
