import { HandThumbUpIcon } from "@heroicons/react/24/outline";

function Message() {
  return (
    <div className="flex flex-row gap-2.5 rounded-md px-3 py-2 shadow-md">
      <HandThumbUpIcon className="h-4 w-4" />
      @lutzzdias came up with a great idea and convinced others to follow along
    </div>
  );
}

export function Card(props: any) {
  return (
    <div className="flex flex-auto flex-col gap-2.5 rounded-md p-3 shadow-md">
      <p className="text-sm/6 font-semibold">Kudos</p>
      <input
        placeholder="Type here"
        className="bg-white-500 rounded-md px-2 py-1.5"
      ></input>
      <Message />
    </div>
  );
}
