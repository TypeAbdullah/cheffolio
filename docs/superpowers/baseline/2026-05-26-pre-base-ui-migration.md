# Pre–Base UI migration baseline

Recorded on branch `staging` before Radix → Base UI migration.

## Verification (all passed)

| Command | Result |
|---------|--------|
| `bun run check-types` | Pass |
| `bun run lint` | Pass |
| `bun run build` | Pass |

## shadcn config

- `components.json` style: `radix-nova`
- Dependency: `radix-ui@^1.4.3`
- 19 files import `radix-ui` (15 `components/ui`, 2 `components/cheffolio`, panel)

## High-touch files (preserve during merge)

- `components/ui/button.tsx` — default gradient variant, `Slot.Root`, `asChild`
- `components/ui/dialog.tsx` — close button `asChild`
- `components/ui/navigation-menu.tsx` — `--radix-navigation-menu-viewport-*` CSS vars
- `app/globals.css` — theme tokens and animation utilities

## Installed shadcn components (merge order)

separator, label, badge, button, item, button-group, checkbox, switch, radio-group, slider, collapsible, popover, tooltip, dropdown-menu, dialog, alert-dialog, navigation-menu, command
