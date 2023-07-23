interface Props {
  children: React.ReactNode;
}

export default function Center({ children }: Props) {
  return <div className="flex flex-col items-center">{children}</div>;
}
