import type { IconProps } from './type';

export function ShadcnIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className="stroke-foreground"
      aria-hidden
      {...props}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="m208 128-80 80M192 40 40 192"
      />
    </svg>
  );
}
