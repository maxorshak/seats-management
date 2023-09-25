import { useState, useMemo } from 'react';

export interface Category {
  id: string;
  name: string;
  seatsCount: number;
  color: string;
}

const initialState: Category[] = [
  { id: '1', name: 'A', seatsCount: 0, color: '#66BB6A' },
  { id: '2', name: 'B', seatsCount: 0, color: '#FF9100' },
  { id: '3', name: 'C', seatsCount: 0, color: '#C6D0DB' },
];

export const useSeatCategories = () => {
  const [categories, setCategories] = useState<Category[]>(initialState);

  const totalSeatsCount = useMemo(() => {
    return categories.reduce((acc, { seatsCount }) => acc + seatsCount, 0);
  }, [categories]);

  const updateCategory = (updatedCategory: Category) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === updatedCategory.id ? updatedCategory : c)),
    );
  };

  return { categories, updateCategory, totalSeatsCount };
};
