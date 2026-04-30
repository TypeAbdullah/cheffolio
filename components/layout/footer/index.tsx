import { Suspense } from 'react';

import { Brand } from '@/components/cheffolio/brand';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { FOOTER_SLOGAN, REPO_URL, UTM_PARAMS } from '@/config/site';
import { USER } from '@/features/portfolio/data/user';
import { addQueryParams } from '@/utils/url';

import { ChainOfSlogan } from './chain-of-slogan';
import { FooterCopyright } from './copyright';

export function Footer() {
  return (
    <footer className="relative" aria-label="Site footer">
      <div className="border-line mx-auto max-w-4xl border-x px-4">
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <Brand className="mr-2 h-4" />
              {socialLinks.map(({ href, label, icon }) => (
                <Button
                  asChild
                  key={label}
                  size="icon-sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a
                    aria-label={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground text-center font-mono text-sm text-balance">
              Source code available on{' '}
              <a
                href={addQueryParams(REPO_URL, UTM_PARAMS)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-foreground font-medium"
              >
                GitHub
              </a>
            </p>
          </div>

          <ChainOfSlogan
            className="screen-line-bottom screen-line-top"
            itemClassName="font-pixel"
            slogan={FOOTER_SLOGAN}
          />
        </div>

        <div className="screen-line-bottom flex max-w-4xl flex-col justify-between gap-2 py-4">
          <Suspense>
            <FooterCopyright />
          </Suspense>
        </div>
      </div>

      <div className="pb-[env(safe-area-inset-bottom,0px)] sm:hidden">
        <div className="flex h-23" />
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    href: addQueryParams(USER.socialLinks.x, UTM_PARAMS),
    label: 'X',
    icon: <XIcon />,
  },
  {
    href: addQueryParams(USER.socialLinks.github, UTM_PARAMS),
    label: 'Github',
    icon: <GithubIcon />,
  },
  {
    href: addQueryParams(USER.socialLinks.linkedin, UTM_PARAMS),
    label: 'Linkedin',
    icon: <LinkedinIcon />,
  },
];
