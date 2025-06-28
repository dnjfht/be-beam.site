import * as React from 'react';
import { Label } from '../label/Label';
import { FormMessage } from '../form/FormMessage';
import { Input } from '../input/Input';
import { cn } from '@/lib/tailwind';
import InputDeleteIcon from '../icons/InputDeleteIcon';

interface TextFieldProps extends React.ComponentProps<'input'> {
  isClearable?: boolean;
  label: string;
  description?: string;
  error?: string;
  rightSection?: React.ReactNode;
}

export const TextField = React.forwardRef<
  React.ComponentRef<'input'>,
  TextFieldProps
>(({ className, label, description, error, rightSection, ...props }, ref) => {
  return (
    <div className={cn('relative flex flex-col gap-2', className)}>
      <Label>{label}</Label>
      <div className="relative">
        <Input ref={ref} aria-invalid={!!error} {...props} />
        {rightSection && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            {rightSection}
          </div>
        )}
      </div>
      {error ? (
        <FormMessage variant="error">{error}</FormMessage>
      ) : description ? (
        <FormMessage>{description}</FormMessage>
      ) : null}
    </div>
  );
});

export const ClearButton = (props: React.ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'flex cursor-pointer items-center justify-center p-1',
        props.className,
      )}
      type="button"
      aria-label="Clear"
      {...props}
    >
      <InputDeleteIcon className="size-6 text-gray-500" />
    </button>
  );
};

TextField.displayName = 'TextField';
