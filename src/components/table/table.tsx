import Image from 'next/image';
import arrowIcon from '@/assets/arrow.svg';
import { SeatChart } from '@/components/seat-chart';
import { useSeatCategories } from '@/hooks/useSeatCategories';
import { SeatAllocationForm } from './seat-allocation-form';
import { Circle } from './circle';

export const Table = () => {
  const { categories, updateCategory, totalSeatsCount } = useSeatCategories();

  return (
    <section className="flex flex-col gap-12">
      <header className="flex w-full items-center justify-between">
        <h3>Grades</h3>
        <p className="text-xs">Last Updated 1/24/22 at 10:31 am</p>
      </header>

      <table className="table table-fixed">
        <thead>
          <tr>
            <th align="left" className="py-4 align-top text-xs">
              School Name
            </th>
            <th align="left" className="py-4 align-top text-xs">
              Applicant List
            </th>
            <th className="py-4 align-top text-xs">
              Current Status
              <div className="mt-1.5 flex justify-center gap-3">
                {Object.values(categories).map(({ id, color, name }) => (
                  <div key={id} className="flex items-center gap-1">
                    <Circle color={color} />
                    <span className="font-normal text-[#42576D]">{name}</span>
                  </div>
                ))}
              </div>
            </th>
            <th className="py-4 align-top text-xs">Open Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pb-4 pt-8" colSpan={4}>
              <h5>Grade 8</h5>
            </td>
          </tr>
          <tr>
            <td className="py-4">
              <h6>Default</h6>
            </td>
            <td className="py-4">
              <a href="#" className="flex items-center">
                <span className="text-2xl text-primary-light">809</span>
                <Image priority src={arrowIcon} alt="arrow" />
              </a>
            </td>
            <td align="center" className="py-4">
              <SeatChart
                categories={categories}
                totalSeatsCount={totalSeatsCount}
              />
            </td>
            <td align="center" className="py-4">
              <SeatAllocationForm
                categories={categories}
                updateCategory={updateCategory}
                totalSeatsCount={totalSeatsCount}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} align="right" className="pt-4 font-bold text-black">
              Grade 8 Total Open Seats: {totalSeatsCount}
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
