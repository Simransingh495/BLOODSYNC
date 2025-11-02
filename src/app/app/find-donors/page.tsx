'use client';

import { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { users } from '@/lib/data';
import type { User } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

export default function FindDonorsPage() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nearbyDonors, setNearbyDonors] = useState<User[]>([]);
  const { toast } = useToast();

  const handleGetLocation = () => {
    setLoading(true);
    setError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
          toast({ title: 'Location captured successfully!' });
        },
        (err) => {
          setError(`Error: ${err.message}`);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      // In a real app, you'd fetch this from a backend.
      // Here, we just filter mock data. We'll pretend the NY users are "nearby".
      const donors = users.filter(
        (user) => user.role === 'donor' && user.location.includes('New York')
      );
      setNearbyDonors(donors);
    }
  }, [location]);

  const handleRequest = (donorName: string) => {
    toast({
      title: 'Request Sent',
      description: `A notification has been sent to ${donorName}.`,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight font-headline">Find Nearby Donors</h2>
      <Card>
        <CardHeader>
          <CardTitle>Geolocation Search</CardTitle>
          <CardDescription>
            Use your current location to find available blood donors near you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input placeholder="Search by city or zip code..." className="max-w-xs" />
             <Button onClick={handleGetLocation} disabled={loading}>
              <MapPin className="mr-2 h-4 w-4" />
              {loading ? 'Getting Location...' : 'Use My Current Location'}
            </Button>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {location && (
            <p className="text-sm text-muted-foreground">
              Your approximate location: Latitude: {location.latitude.toFixed(2)}, Longitude: {location.longitude.toFixed(2)}
            </p>
          )}
        </CardContent>
      </Card>

      {loading && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
             <Card key={i}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-[120px]" />
                </CardContent>
              </Card>
          ))}
        </div>
      )}

      {!loading && nearbyDonors.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-4 font-headline">Available Donors Near You</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nearbyDonors.map((donor) => (
              <Card key={donor.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={donor.avatarUrl} alt={donor.name} />
                    <AvatarFallback>{donor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{donor.name}</CardTitle>
                    <CardDescription>{donor.location}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl text-primary">{donor.bloodType}</span>
                    <Badge variant={donor.availability === 'Available' ? 'default' : 'secondary'} className={donor.availability === 'Available' ? 'bg-green-600' : ''}>{donor.availability}</Badge>
                  </div>
                   <p className="text-sm text-muted-foreground">Last donation: {donor.lastDonation}</p>
                  <Button onClick={() => handleRequest(donor.name)} disabled={donor.availability !== 'Available'}>
                    Request Donation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {!loading && nearbyDonors.length === 0 && location && (
         <div className="text-center py-10">
            <p className="text-muted-foreground">No donors found for your location. Please try searching another area.</p>
         </div>
      )}
    </div>
  );
}
