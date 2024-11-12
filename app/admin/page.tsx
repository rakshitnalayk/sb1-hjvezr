"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  Clock,
  Package,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle2,
  Clock4
} from 'lucide-react';
import { mockOrders, mockAnalytics } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminDashboard() {
  const [activeOrders, setActiveOrders] = useState(mockOrders);

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: { color: string; icon: any } } = {
      preparing: { color: "bg-yellow-500/10 text-yellow-500", icon: Clock4 },
      completed: { color: "bg-green-500/10 text-green-500", icon: CheckCircle2 },
    };
    const { color, icon: Icon } = variants[status] || variants.preparing;
    return (
      <Badge variant="outline" className={`${color} flex gap-1 items-center`}>
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage orders and view analytics</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <h3 className="text-2xl font-bold">{mockAnalytics.totalOrders}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <DollarSign className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <h3 className="text-2xl font-bold">₹{mockAnalytics.totalRevenue}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Most Popular</p>
                <h3 className="text-lg font-semibold">{mockAnalytics.popularItems[0].name}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Peak Time</p>
                <h3 className="text-lg font-semibold">{mockAnalytics.peakHours[1].hour}</h3>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders">Active Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Table</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>Table {order.table}</TableCell>
                      <TableCell>{order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}</TableCell>
                      <TableCell>₹{order.total}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setActiveOrders(orders =>
                              orders.map(o =>
                                o.id === order.id
                                  ? { ...o, status: o.status === 'preparing' ? 'completed' : 'preparing' }
                                  : o
                              )
                            );
                          }}
                        >
                          {order.status === 'preparing' ? 'Mark Complete' : 'Reopen'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
                <div className="space-y-4">
                  {mockAnalytics.popularItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.count} orders</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Peak Hours</h3>
                <div className="space-y-4">
                  {mockAnalytics.peakHours.map((peak, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{peak.hour}</span>
                      <span className="font-semibold">{peak.orders} orders</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}