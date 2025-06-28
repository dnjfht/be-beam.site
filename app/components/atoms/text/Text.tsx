import { colorStyles, variantStyles } from './Text.styles';
import type { TextProps } from '../../../types/components';
import clsx from 'clsx';

export default function Text({
  as: Component = 'p',
  variant,
  color = 'black',
  className = '',
  children,
  onClick,
}: TextProps) {
  return (
    <Component
      className={clsx(variantStyles[variant], colorStyles[color], className)}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
