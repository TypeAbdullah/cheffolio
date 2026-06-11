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
  triggerClassName,
  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;
  className?: string;
  triggerClassName?: string;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible className={cn('group/collapsible', className)}>
      <div>
        {items.slice(0, max).map((item, index) => (
          <React.Fragment
            key={
              typeof keyExtractor === 'function' ? keyExtractor(item) : index
            }
          >
            {renderItem(item)}
          </React.Fragment>
        ))}
      </div>

      {items.length > max && (
        <CollapsibleContent>
          {items.slice(max).map((item, index) => (
            <React.Fragment
              key={
                typeof keyExtractor === 'function'
                  ? keyExtractor(item)
                  : max + index
              }
            >
              {renderItem(item)}
            </React.Fragment>
          ))}
        </CollapsibleContent>
      )}

      {items.length > max && (
        <div
          className={cn(
            'border-line flex h-12 items-center justify-center border-t pb-px',
            triggerClassName
          )}
        >
          <CollapsibleTrigger
            render={<Button className="gap-2 pr-2.5 pl-3" size="sm" />}
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
