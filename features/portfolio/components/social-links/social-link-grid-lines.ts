import { cn } from '@/lib/utils';

const MOBILE_COLS = 2;
const DESKTOP_COLS = 3;

function isLastRow(index: number, total: number, cols: number) {
  return Math.floor(index / cols) === Math.floor((total - 1) / cols);
}

function getMobileGridLines(index: number, total: number) {
  if (index % MOBILE_COLS !== 0) return;

  return cn(
    'max-md:screen-line-top',
    isLastRow(index, total, MOBILE_COLS)
      ? 'max-md:screen-line-bottom-none'
      : 'max-md:screen-line-bottom'
  );
}

function getDesktopGridLines(index: number, total: number) {
  if (index % DESKTOP_COLS !== 0) return;

  return cn(
    'md:screen-line-top',
    isLastRow(index, total, DESKTOP_COLS)
      ? 'md:screen-line-bottom-none'
      : 'md:screen-line-bottom'
  );
}

export function getSocialLinkGridLines(index: number, total: number) {
  return cn(
    getMobileGridLines(index, total),
    getDesktopGridLines(index, total)
  );
}
