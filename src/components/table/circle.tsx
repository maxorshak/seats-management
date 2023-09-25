interface Props {
  color: string;
}

export const Circle: React.FC<Props> = ({ color }) => (
  <figure
    className="aspect-square h-3 rounded-full border border-solid border-black"
    style={{ backgroundColor: color }}
  />
);
