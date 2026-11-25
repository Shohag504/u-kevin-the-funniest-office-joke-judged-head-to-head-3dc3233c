// The Funniest Office Joke, Judged Head to Head
// Writes one original one-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The gate requires 1-200 UTF-8 characters, not only whitespace; the joke
// is written with no trailing newline so the file holds exactly the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our printer only jams on deadline day, which proves it reads the calendar better than my manager does.";

// Fail loudly instead of writing an entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
