type PokerCardProps = {
  content: string;
};

export function PokerCard(props: PokerCardProps) {
  const { content } = props;

  return (
    <div className="flex h-20 w-12 cursor-pointer items-center justify-center rounded-md border-1 border-black text-2xl">
      {content}
    </div>
  );
}
