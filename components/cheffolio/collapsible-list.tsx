import { ChevronDownIcon } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

export function CollapsibleList<T>({
  items,
  max = 3,
  className,
  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;
  className?: string;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible className={cn('group/collapsible', className)}>
      {items.slice(0, max).map((award, index) => (
        <React.Fragment
          key={typeof keyExtractor === 'function' ? keyExtractor(award) : index}
        >
          {renderItem(award)}
        </React.Fragment>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((award, index) => (
          <div
            key={
              typeof keyExtractor === 'function'
                ? keyExtractor(award)
                : max + index
            }
            className="border-line border-b"
          >
            {renderItem(award)}
          </div>
        ))}
      </CollapsibleContent>

      {items.length > max && (
        <div className="flex h-12 items-center justify-center pb-px">
          <CollapsibleTrigger
            render={
              <Button className="gap-2 border-none pr-2.5 pl-3" size="sm" />
            }
          >
            <span className="hidden group-data-closed/collapsible:block">
              Show More
            </span>

            <span className="hidden group-data-open/collapsible:block">
              Show Less
            </span>

            <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  );
}
