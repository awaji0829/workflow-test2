"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table } from '@/components/Table'
import { ProgressBar } from '@/components/ProgressBar'
import { BarChart } from '@/components/BarChart'

const columns = [
  {
    key: 'product',
    title: 'Product',
  },
  {
    key: 'category',
    title: 'Category',
    render: (value: string) => (
      <span className="text-[#7a7a7a]">{value}</span>
    ),
  },
  {
    key: 'price',
    title: 'Price',
  },
  {
    key: 'status',
    title: 'Status',
    render: (value: string) => (
      <Badge className="bg-[#f6ffed] text-[#009b52] hover:bg-[#f6ffed]">
        {value}
      </Badge>
    ),
  },
]

const data = [
  {
    product: 'Arabica Blend',
    category: 'Coffee',
    price: '$24.99',
    status: 'Active',
  },
  {
    product: 'Dark Roast',
    category: 'Coffee',
    price: '$22.99',
    status: 'Active',
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-6">
      {/* Header with Korean button */}
      <div className="flex justify-end mb-6">
        <Button className="bg-[#009b52] hover:bg-[#009b52]/90 text-white px-6 py-2 rounded-md">진입하기</Button>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Top row - 3 Default Cards */}
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm">Standard card appearance with subtle border and clean background.</p>
          </CardContent>
        </Card>

        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm">Standard card appearance with subtle border and clean background.</p>
          </CardContent>
        </Card>

        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm">Standard card appearance with subtle border and clean background.</p>
          </CardContent>
        </Card>
      </div>

      {/* Middle section - Table */}
      <div className="mb-6">
        {/* Product Table - Full Width */}
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardContent className="p-0">
            <Table columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>

      {/* Charts Section - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Vertical Bar Chart */}
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={[
                { label: 'Jan', value: 65 },
                { label: 'Feb', value: 45 },
                { label: 'Mar', value: 85 },
                { label: 'Apr', value: 70 },
              ]}
              height={160}
            />
          </CardContent>
        </Card>

        {/* Progress Bars */}
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Progress Bars</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ProgressBar
              label="Completion"
              value={75}
            />
            <ProgressBar
              label="Progress"
              value={45}
            />
            
          </CardContent>
        </Card>
      </div>

      {/* Second row of Default Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm">Standard card appearance with subtle border and clean background.</p>
          </CardContent>
        </Card>

        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm">Standard card appearance with subtle border and clean background.</p>
          </CardContent>
        </Card>

        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm">Standard card appearance with subtle border and clean background.</p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Revenue */}
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[#000000] text-3xl font-bold">$24,780</span>
              <span className="text-[#009b52] text-sm font-medium">+12.5%</span>
            </div>
            <p className="text-[#7a7a7a] text-sm">Compared to last month</p>
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card className="border border-[#e5e5e5] bg-[#ffffff]">
          <CardHeader>
            <CardTitle className="text-[#000000] text-lg font-medium">Basic Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7a7a7a] text-sm mb-4">
              Simple card with title and content. Perfect for displaying basic information or simple data.
            </p>
            <p className="text-[#7a7a7a] text-xs">
              Border: 1px solid #E5E5E5 &nbsp;&nbsp; Radius: 4px &nbsp;&nbsp; Padding: 24px
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
