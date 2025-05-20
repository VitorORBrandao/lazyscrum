import { HandThumbUpIcon } from "@heroicons/react/24/outline";

type RetroItemProps = {
  message: string;
};

export function RetroItem(props: RetroItemProps) {
  const { message } = props;

  return (
    <div className="flex gap-2.5 rounded-md px-3 py-2 shadow-md">
      <HandThumbUpIcon className="h-4 min-h-4 w-4 min-w-4" />
      {message}
    </div>
  );
}
