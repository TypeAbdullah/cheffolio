'use client';

import dynamic from 'next/dynamic';

import { MOBILE_NAV } from '@/config/site';

import { MobileNav } from './mobile-nav';

const CommandMenu = dynamic(() =>
  import('@/components/cheffolio/command-menu').then((mod) => mod.CommandMenu)
);

export function SiteFooterNav() {
  return (
    <div className="fixed bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0))] left-1/2 z-50 -translate-x-1/2 sm:hidden">
      <MobileNav items={MOBILE_NAV} center={<CommandMenu />} />
    </div>
  );
}
