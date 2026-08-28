import type { Route } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface BrandPropsWithSvg extends Omit<
  React.ComponentProps<'svg'>,
  'xmlns' | 'viewBox' | 'fill' | 'href'
> {
  href?: Route | null;
  showText?: boolean;
  size?: number;
  containerClassName?: string;
  textClassName?: string;
}

export function Brand({
  href,
  className,
  containerClassName,
  ...svgProps
}: BrandPropsWithSvg) {
  const content = (
    <div
      className={cn(
        'flex items-center justify-center gap-2',
        containerClassName
      )}
    >
      <BrandLogo {...svgProps} className={cn('h-8 w-auto', className)} />
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="flex-center">
      {content}
    </Link>
  );
}

export const BrandLogo = (props: React.ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 200"
    fill="none"
    aria-hidden
    {...props}
  >
    {/* T */}
    <path
      d="M 10 10 H 150 V 50 H 100 V 190 H 60 V 50 H 10 Z"
      fill="currentColor"
    />
    {/* A */}
    <path
      d="M 170 10 H 310 V 190 H 270 V 120 H 210 V 190 H 170 V 10 Z M 210 50 V 80 H 270 V 50 Z"
      fill="currentColor"
    />
  </svg>
);
