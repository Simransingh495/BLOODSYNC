'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { donations, bloodRequests, users } from '@/lib/data';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Droplets, HeartHandshake, Users, LifeBuoy } from 'lucide-react';
import { bloodTypes } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const bloodTypeCounts = bloodTypes.map((type) => ({
  name: type,
  total: users.filter(
    (user) => user.bloodType === type && user.role === 'donor'
  ).length,
}));

export default function OverviewPage() {
  const stats = [
    {
      title: 'Total Donors',
      value: users.filter((u) => u.role === 'donor').length,
      icon: Users,
    },
    {
      title: 'Blood Requests',
      value: bloodRequests.length,
      icon: HeartHandshake,
    },
    {
      title: 'Lives Saved',
      value: donations.length,
      icon: LifeBuoy,
    },
    {
      title: 'Your Donations',
      value: 3, // Mock value
      icon: Droplets,
    },
  ];

  const recentRequests = bloodRequests.slice(0, 5);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight font-headline">Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="font-headline">Donor Blood Types</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={bloodTypeCounts}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar
                  dataKey="total"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Recent Blood Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Blood Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Urgency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">
                      {request.bloodType}
                    </TableCell>
                    <TableCell>{request.location}</TableCell>
                    <TableCell>
                       <Badge
                        variant={
                          request.urgency === 'High' ? 'destructive' : 
                          request.urgency === 'Medium' ? 'secondary' : 'outline'
                        }
                      >
                        {request.urgency}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
