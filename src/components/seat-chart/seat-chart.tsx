import type { Category } from '@/hooks/useSeatCategories';
import { Circle } from '../table/circle';

interface Props {
  categories: Category[];
  totalSeatsCount: number;
}

export const SeatChart: React.FC<Props> = ({ categories, totalSeatsCount }) => {
  return (
    <div className="flex w-[550px] flex-col gap-2 p-2">
      <div className="flex h-3.5 w-full">
        {categories.map(({ id, color, seatsCount }) => (
          <figure
            key={id}
            className="h-full"
            style={{
              backgroundColor: color,
              width: `${(seatsCount * 100) / totalSeatsCount}%`,
            }}
          />
        ))}
      </div>
      {totalSeatsCount ? (
        <div className="flex items-center justify-center gap-4">
          {categories.map(({ id, color, seatsCount, name }) => (
            <div key={id} className="flex items-center gap-2">
              <Circle color={color} />
              <div className="text-start">
                <p className="text-xs">
                  {seatsCount} {name}
                </p>
                <p className="text-xs">
                  {((seatsCount * 100) / totalSeatsCount).toFixed(0)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
