# Color Theme — Dirt Bike & Small Engine Tracker

An earthy, off-road palette: tire-rubber black, dusty off-white, roost orange, and trail pine.

| Role      | Name           | Hex       | Use it for                                                    | Text on top |
| --------- | -------------- | --------- | ------------------------------------------------------------- | ----------- |
| dark      | Tire Black     | `#14110F` | Main text, nav bar, footer, dark backgrounds                  | light       |
| light     | Dust White     | `#F7F4EF` | Page background, cards, text on dark surfaces                 | dark        |
| primary   | Roost Orange   | `#C2410C` | Buttons, active menu items, links, "Log Ride" / "Add Bike"    | light       |
| secondary | Trail Pine     | `#2F5D62` | Secondary buttons, chart series, tags (sand, mud, racing)     | light       |
| success   | Fresh Oil      | `#2E7D32` | Service done, part healthy, "on schedule"                     | light       |
| warning   | Caution Amber  | `#F2B705` | Service due soon (e.g. within 2 hours of the interval)        | dark        |
| danger    | Overdue Red    | `#9F1239` | Overdue service, worn-out part, delete actions                | light       |

## Notes

- Every "Text on top" pairing meets WCAG AA contrast (4.5:1 or better) for normal-size text.
- Orange (primary), amber (warning) and red (danger) are close in hue, so danger leans toward
  crimson to keep them apart. Status colors should still be paired with an icon or label
  (e.g. "Overdue"), never color alone.
- For the stats and season-forecast charts, use **secondary** for "actual part life" and
  **primary** for "rated part life" so the two series contrast.

## In code (Tailwind v4)

Defined in `app/globals.css` under `@theme`, so these classes work anywhere:

```
bg-primary  text-light      bg-secondary  text-dark
bg-success  bg-warning      bg-danger     border-primary
```
