import { RetroItem } from "@/components/retro-item";
import { Input } from "@headlessui/react";

type RetroColumnProps = {
  title: string;
};

export function RetroColumn(props: RetroColumnProps) {
  const { title } = props;

  return (
    <div className="flex flex-auto flex-col gap-2.5 rounded-md p-3 shadow-md">
      <h3 className="text-sm/6 font-semibold">{title}</h3>
      <Input
        placeholder="Type here"
        className="bg-white-500 rounded-md px-2 py-1.5"
      />
      <RetroItem message="@lutzzdias came up with a great idea and convinced others to follow along" />
    </div>
  );
}
