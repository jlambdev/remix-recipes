interface Props {
  children: React.ReactNode;
  underline?: boolean;
}

export default function Title({ children, underline }: Props) {
  return <h2 className={`text-3xl font-bold p-4 text-gray-800 ${underline ? 'underline' : ''}`}>{children}</h2>;
}
