import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { MainHeader } from '@/components/main-header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Droplets, Heart, Users } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Find Donors',
    description:
      'Instantly search for compatible blood donors in your area using our smart geolocation feature.',
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Request & Donate',
    description:
      'A streamlined process for both requesting blood in emergencies and offering to donate.',
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'Smart Matching',
    description:
      'Our AI-powered tool suggests the best possible matches for critical requests based on various factors.',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1">
        <section className="relative w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Lifesavers.
                    <br />
                    Donate Blood, Save Lives.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    BloodSync is a revolutionary platform that connects blood
                    donors with patients in need, powered by AI to make every
                    donation count.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/app/request-blood">
                      Request Blood
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/register">
                      Become a Donor
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl lg:h-auto">
                {heroImage && (
                  <Image
                    alt="Hero"
                    className="h-full w-full object-cover"
                    src={heroImage.imageUrl}
                    fill
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Smarter Way to Save Lives
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is packed with features designed to make blood
                  donation and requests seamless and efficient.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join the BloodSync Community
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to make a difference? Register today to become a donor or
                get help when you need it most.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/register">Sign Up Now</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <div className="flex items-center">
          <Logo />
        </div>
        <p className="text-xs text-muted-foreground sm:ml-auto">
          &copy; 2024 BloodSync. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
