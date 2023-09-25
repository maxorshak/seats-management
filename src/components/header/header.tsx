import { Menu } from './menu';

export const Header = () => {
  return (
    <header className="flex w-full justify-between">
      <div className="flex max-w-[791px] flex-col items-start gap-4">
        <h1>Seat Management</h1>
        <h2>Admission Process Name</h2>
        <h3>School Name</h3>
        <p>
          The number of offers made to students in the lottery depends on the
          number of seats you declare.
        </p>
      </div>
      <Menu />
    </header>
  );
};
