import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn, focusVisibleRing } from '@/lib/tailwind';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-t3  transition-all disabled:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white hover:bg-primary/90 disabled:bg-gray-300 disabled:text-gray-500',
        tertiary:
          'bg-white text-gray-600 border border-gray-600 disabled:bg-gray-300 disabled:text-gray-500',
      },
      size: {
        md: 'h-13 px-4 py-2 min-w-50',
        sm: 'h-12 gap-1.5 px-4 min-w-30',
        lg: 'h-14.5 px-4 min-w-72.5',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        focusVisibleRing(),
        buttonVariants({ variant, size, className }),
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
