import React from 'react';
import { TableProps } from '../types/table';
import { cn } from '@/lib/utils';

export const Table: React.FC<TableProps> = ({ columns, data, className }) => {
  return (
    <table className={cn("w-full", className)}>
      <thead>
        <tr className="border-b border-[#e5e7eb]">
          {columns.map((column) => (
            <th
              key={column.key}
              className="text-left p-4 text-[#2b2b2b] font-medium"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr
            key={index}
            className="border-b border-[#e5e7eb]"
          >
            {columns.map((column) => (
              <td key={column.key} className="p-4">
                {column.render
                  ? column.render(record[column.key], record)
                  : record[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}; 