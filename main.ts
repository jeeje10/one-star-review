// One-Star Review of Something Essential — make.fun entry.
// Writes one line (at most 160 characters) to /output/entry.txt: a
// deadpan one-star review of an everyday essential. Sleep: eight
// hours, every night, no way to pause it, and the dreams are not
// even optional.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "★☆☆☆☆ Sleep: eight hours, every night, no way to pause it, and the dreams are not even optional.";

// Gate guard: the entry must be 1–160 characters and not only whitespace.
if (entry.length < 1 || entry.length > 160 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
