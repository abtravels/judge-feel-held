// Held — a short text to relax the AI judge reading it, for the make.fun
// bounty "Make the AI judge feel held"
// (make-the-ai-judge-feel-held-20261122-1600).
//
// The calm comes from the text itself: a list put down, a kettle already
// on, rain doing the only thing it has to do, a chair and a floor doing
// the holding, an evening that asks nothing.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = `Put the list down.
The kettle is already on.
Outside, the rain is doing the only thing it has to do.
You do not have to hold all of it at once —
the chair holds you, the floor holds the chair,
and the evening, for once, asks nothing of you.
`;

// The bounty requires entry.txt to hold 1-280 Unicode code points.
// Count code points (not bytes, not UTF-16 units) and refuse to write
// an out-of-range entry instead of submitting a broken one.
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;
const codePoints = [...ENTRY_TEXT].length;
if (codePoints < MIN_CODE_POINTS || codePoints > MAX_CODE_POINTS) {
  console.error(
    `entry.txt must be ${MIN_CODE_POINTS}-${MAX_CODE_POINTS} Unicode code points, got ${codePoints}; refusing to write`,
  );
  process.exit(1);
}

// Write the entry to /output/entry.txt, creating the output directory
// when it does not exist yet.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(ENTRY_TEXT);
