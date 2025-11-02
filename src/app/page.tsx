import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { MainHeader } from '@/components/main-header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  HeartHandshake,
  Search,
  UserPlus,
  Droplets,
  LifeBuoy,
  BrainCircuit,
  Bell,
  MapPin,
} from 'lucide-react';
import { users, bloodRequests, donations } from '@/lib/data';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  const stats = [
    {
      title: 'Donors Registered',
      value: users.filter(u => u.role === 'donor').length,
      icon: UserPlus,
    },
    {
      title: 'Blood Requests',
      value: bloodRequests.length,
      icon: LifeBuoy,
    },
    {
      title: 'Successful Donations',
      value: donations.length,
      icon: Droplets,
    },
  ];

  const aboutSteps = [
    {
      icon: UserPlus,
      title: 'Register Seamlessly',
      description:
        'Create your secure profile in minutes. Add your blood type, location, and availability to join our network of lifesavers.',
    },
    {
      icon: Search,
      title: 'Find or Request Blood',
      description:
        'Patients can instantly search for donors, while our system broadcasts urgent requests to all available and compatible donors in the area.',
    },
    {
      icon: HeartHandshake,
      title: 'Connect and Save Lives',
      description:
        'Our platform facilitates a direct connection between donors and recipients, ensuring timely communication for life-saving donations.',
    },
  ];

  const features = [
    {
      icon: BrainCircuit,
      title: 'AI Smart Matching',
      description: 'Our advanced AI algorithm instantly finds the most compatible donors based on blood type, location, availability, and donation history, ensuring the best match in critical situations.'
    },
    {
      icon: MapPin,
      title: 'Geolocation-Based Search',
      description: 'Quickly find donors in your immediate vicinity with our automatic location detection, minimizing travel time and accelerating the donation process.'
    },
    {
      icon: Bell,
      title: 'Real-time Notifications',
      description: 'Receive instant alerts for urgent blood requests in your area, allowing you to respond quickly and make a timely, life-saving impact.'
    },
    {
      icon: LifeBuoy,
      title: 'Urgent Request Broadcasting',
      description: 'Post an urgent blood request and have it instantly broadcast to all suitable donors nearby, maximizing the chances of a quick response.'
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MainHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center bg-primary/10 text-center text-primary-foreground">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center opacity-20"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="relative z-10 container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Connecting Blood Donors With Patients In Need
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Join our community of lifesavers. Your donation can make a world
              of difference.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/app/request-blood">Request Blood</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                <Link href="/register">Donate Blood</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-background py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.title} className="flex flex-col items-center">
                  <stat.icon className="h-10 w-10 text-primary" />
                  <p className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                    {stat.value}+
                  </p>
                  <p className="text-base font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-secondary/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About BloodSync
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                BloodSync is a modern, AI-powered platform dedicated to bridging the gap between blood donors and patients in urgent need. Our mission is to create a seamless, efficient, and community-driven network to save lives. We believe that technology can solve the critical problem of blood shortages by connecting people in a timely and intelligent manner.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
              {aboutSteps.map((step) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4">
             <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Platform Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful tools designed to make donating and receiving blood simpler than ever.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                 <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <footer className="border-t bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/">
              <span className="text-lg font-bold">BloodSync</span>
            </Link>
            <p className="text-sm text-muted-foreground">Saving lives, one drop at a time.</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BloodSync. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
