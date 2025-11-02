import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 font-bold tracking-tight text-primary',
        className
      )}
    >
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12.0001 2C12.0001 2 5.00006 8 5.00006 13C5.00006 18 8.13407 22 12.0001 22C15.8661 22 19.0001 18 19.0001 13C19.0001 8 12.0001 2 12.0001 2Z" 
          fill="currentColor"
        />
        <path 
          d="M18.364 15.5355C18.7303 13.7843 18.3103 11.9602 17.2003 10.5C15.4203 8.01 13.0003 6.5 10.5003 6.5C8.92026 6.5 7.42026 7.03 6.20026 7.9C5.23026 8.58 4.43026 9.49 3.86026 10.5M12.0003 22V15.5C12.0003 14.39 12.4203 13.33 13.1703 12.5C14.0703 11.51 15.3903 11 16.5003 11C18.9903 11 21.0003 13.01 21.0003 15.5C21.0003 17.43 19.8803 19.12 18.3603 20.19"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-headline text-2xl">BloodSync</span>
    </div>
  );
}
