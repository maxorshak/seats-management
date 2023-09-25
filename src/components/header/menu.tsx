import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import configIcon from '@/assets/config.svg';
import chevronIcon from '@/assets/chevron.svg';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <menu className="flex flex-col items-end gap-1">
      <button onClick={toggle} className="flex items-center gap-2">
        <Image priority src={configIcon} alt="config" />
        <span className="text-sm font-bold">Actions</span>
        <Image
          priority
          src={chevronIcon}
          alt="shevron"
          className={cn('duration-300', { 'rotate-180': !isOpen })}
        />
      </button>
      {isOpen && (
        <ul className="boder-[#C6D0DB] rounded-lg border border-solid px-4 py-3">
          {[
            'Download CSV',
            'Configure Admission Process',
            'Reset All Open Seats',
            'Change Seat Allocation Status',
          ].map((item) => (
            <li key={item} className="w-64 px-4 py-2.5 text-center text-sm">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </menu>
  );
};
