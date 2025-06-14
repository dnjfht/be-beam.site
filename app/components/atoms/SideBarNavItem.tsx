import clsx from 'clsx';
import { NavLink } from 'react-router';

export default function SideBarNavItem({
  to,
  title,
  onClick,
}: {
  to: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center gap-2 px-5 py-5 text-t3 hover:text-primary',
          isActive ? 'text-primary' : '',
        )
      }
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
}
