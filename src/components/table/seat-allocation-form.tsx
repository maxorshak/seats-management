import { useState } from 'react';
import type { Category } from '@/hooks/useSeatCategories';
import { SeatInput } from './seat-input';

interface Props {
  categories: Category[];
  updateCategory: (category: Category) => void;
  totalSeatsCount: number;
}

export const SeatAllocationForm: React.FC<Props> = ({
  categories,
  updateCategory,
  totalSeatsCount,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const onCategoryChange = (category: Category) => {
    setIsEditing(true);
    updateCategory(category);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <form
      className="flex w-[273px] flex-col gap-2 p-2"
      onSubmit={submitHandler}
    >
      <div className="flex gap-1">
        <div className="flex flex-1 flex-col gap-2.5">
          {categories.map((category) => (
            <SeatInput
              key={category.id}
              category={category}
              onChange={onCategoryChange}
              totalSeatsCount={totalSeatsCount}
            />
          ))}
        </div>
        <div className="flex items-center justify-center rounded-lg bg-[#EFF3F8] px-3">
          <span className="font-semibold text-primary-light">
            {totalSeatsCount}
          </span>
        </div>
      </div>
      <button
        type="submit"
        disabled={!isEditing}
        className="rounded-lg bg-[#2622FF] py-1.5 text-sm font-bold text-white duration-300 active:scale-95 disabled:cursor-not-allowed disabled:bg-[#F4F4F4] disabled:text-[#A8A8A8]"
      >
        Save
      </button>
    </form>
  );
};
