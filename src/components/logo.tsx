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
          d="M12 2C7.58172 2 4 5.58172 4 10C4 12.8357 5.25363 15.3859 7 17.1517C8.74637 18.9174 9.99999 21.4677 10 22L14 22C14 21.4677 15.2536 18.9174 17 17.1517C18.7464 15.3859 20 12.8357 20 10C20 5.58172 16.4183 2 12 2Z"
          fill="currentColor"
        />
        <path
          d="M13 6H11V9H8V11H11V14H13V11H16V9H13V6Z"
          fill="white"
        />
      </svg>
      <span className="font-headline text-2xl">BloodSync</span>
    </div>
  );
}
