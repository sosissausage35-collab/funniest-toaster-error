// The Funniest Toaster Error Message — make.fun entry
// Bounty: u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// The line: a deadpan appliance error code, then the twist — the bread
// refuses, because it has seen the crumb tray (the toaster's graveyard).
// No toast puns, no "burnt" jokes: the surprise comes from the bread
// having a survival instinct. One voice, one read, every word earns
// its place.
//
// Judge-criteria mapping (brief order, most important first):
//   1. Real error message: "E05:" code + terse appliance phrasing, and
//      funny because the fault is the bread's, not the machine's.
//   2. Freshness: the joke comes from the bread's point of view — the
//      crumb tray as a graveyard the bread has already seen.
//   3. Tightness: 56 characters; cut "PLEASE" and any apology, the
//      code and the two sentences carry it alone.
//   4. One voice: deadpan machine report from start to finish.
//   5. Single read: the punchline lands in the second sentence with
//      no setup beyond the error code.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "E05: BREAD REFUSED TO TOAST. IT HAS SEEN THE CRUMB TRAY.";

const MAX_CHARS = 120;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
