import { useMemo } from 'react';
import Image from 'next/image';
import type { Category } from '@/hooks/useSeatCategories';
import pencilIcon from '../../assets/pencil.svg';

interface Props {
  category: Category;
  totalSeatsCount: number;
  onChange: (updatedCategory: Category) => void;
}

export const SeatInput: React.FC<Props> = ({
  category,
  totalSeatsCount,
  onChange,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.abs(Math.round(Number(e.target.value)));
    onChange({ ...category, seatsCount: value });
  };

  const percentageOfTotal = useMemo(() => {
    if (!totalSeatsCount) {
      return 0;
    }
    const total = (category.seatsCount * 100) / totalSeatsCount;
    return total.toFixed(0);
  }, [category, totalSeatsCount]);

  return (
    <div className="flex items-center gap-1">
      <p className="flex-1 text-center text-xs text-primary-light">
        {category.name}: {percentageOfTotal}%
      </p>
      <div className="relative">
        <input
          className="w-16 rounded border border-solid border-[#C6D0DB] py-2 pl-0.5 pr-4 text-center text-xs font-bold text-primary outline-none focus-within:border-[#2622FF]"
          type="number"
          min="0"
          max="999999"
          step="1"
          value={category.seatsCount.toString()}
          onChange={onChangeHandler}
        />
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
          <Image priority src={pencilIcon} alt="pencil" />
        </div>
      </div>
    </div>
  );
};
