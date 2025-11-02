'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { BellRing, PartyPopper } from 'lucide-react';
import { addDays, format, differenceInDays } from 'date-fns';

// In many regions, you can donate whole blood every 56 days (8 weeks).
const DONATION_INTERVAL_DAYS = 56;

export default function ReminderPage() {
    const [lastDonationDate, setLastDonationDate] = useState<Date | undefined>();
    const { toast } = useToast();

    const nextEligibleDate = lastDonationDate 
        ? addDays(lastDonationDate, DONATION_INTERVAL_DAYS) 
        : undefined;
    
    const daysUntilNextDonation = nextEligibleDate 
        ? differenceInDays(nextEligibleDate, new Date()) 
        : null;

    const handleSetReminder = () => {
        if (!nextEligibleDate) {
            toast({
                variant: 'destructive',
                title: 'No Date Selected',
                description: 'Please select your last donation date first.'
            });
            return;
        }

        // In a real app, this would use a service to schedule a notification (email, push, etc.)
        toast({
            title: 'Reminder Set!',
            description: `We'll remind you to donate on ${format(nextEligibleDate, 'PPP')}.`
        });
    };

  return (
    <div className="space-y-6">
       <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight font-headline">Donation Timer</h2>
            <p className="text-muted-foreground">Track your donation schedule and set reminders to never miss an opportunity to save a life.</p>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Calculate Your Next Donation Date</CardTitle>
          <CardDescription>
            Select the date of your last whole blood donation. You are typically eligible to donate again after 56 days.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Calendar
                mode="single"
                selected={lastDonationDate}
                onSelect={setLastDonationDate}
                disabled={(date) => date > new Date()}
                initialFocus
                className="rounded-md border"
            />
             <div className="text-center">
                {nextEligibleDate ? (
                    <div className="space-y-4">
                        <p className="text-muted-foreground">Your next eligible donation date is:</p>
                        <p className="text-3xl font-bold text-primary">{format(nextEligibleDate, 'PPP')}</p>
                        
                        {daysUntilNextDonation !== null && daysUntilNextDonation > 0 ? (
                             <p className="text-lg">That's in <span className="font-semibold">{daysUntilNextDonation}</span> days!</p>
                        ): (
                            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-green-600">
                                <PartyPopper className="h-6 w-6" />
                                <span>You are eligible to donate now!</span>
                            </div>
                        )}
                        
                    </div>
                ) : (
                    <p className="text-muted-foreground">Select a date to see when you can donate next.</p>
                )}
            </div>
        </CardContent>
        <CardFooter>
             <Button onClick={handleSetReminder} disabled={!nextEligibleDate} className="w-full md:w-auto ml-auto">
                <BellRing className="mr-2 h-4 w-4" />
                Set Reminder
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
