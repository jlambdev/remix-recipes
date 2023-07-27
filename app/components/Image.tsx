interface Props {
  src: string;
  alt: string | undefined;
}

export default function Image({ src, alt }: Props) {
  return (
    <div className="pl-4 pr-4">
      <img className="rounded-full shadow-xl" src={src} alt={alt} />
    </div>
  );
}
