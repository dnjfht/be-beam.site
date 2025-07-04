'use client';

import * as React from 'react';
import { Input } from '../atoms/input/Input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../atoms/popover/Popover';
import { Calendar } from '../atoms/calendar/Calendar';
import CalendarIcon from '../atoms/icons/CalendarIcon';

function formatDate(date: Date | undefined) {
  if (!date) {
    return '';
  }

  return date?.toISOString().slice(0, 10).replace(/-/g, '.') || '';
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(value).toString() === 'Invalid Date' ? undefined : new Date(value),
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);

  return (
    <div className="relative flex gap-2">
      <Input
        id="date"
        value={value}
        placeholder="2025.06.01"
        className="bg-background pr-10"
        onChange={(e) => {
          const date = new Date(e.target.value);
          onChange(e.target.value);
          if (isValidDate(date)) {
            setDate(date);
            setMonth(date);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id="date-picker"
            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
          >
            <CalendarIcon className="size-6 text-gray-800" />
            <span className="sr-only">날짜 선택</span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(date) => {
              if (!date) {
                return;
              }
              setDate(date);
              onChange(formatDate(date));
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
