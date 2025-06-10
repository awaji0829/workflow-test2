export interface BarChartData {
  label: string;
  value: number;
}

export interface BarChartProps {
  data: BarChartData[];
  title?: string;
  height?: number;
  barColor?: string;
  className?: string;
} 