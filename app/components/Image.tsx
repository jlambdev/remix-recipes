interface Props {
  src: string;
  alt: string | undefined;
}

export default function Image({ src, alt }: Props) {
  return (
    <div className="pl-4 pr-4">
      <img className="rounded-3xl shadow-lg" src={src} alt={alt} />
    </div>
  );
}
