export interface TableColumn {
  key: string;
  title: string;
  render?: (value: any, record: any) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  className?: string;
} 