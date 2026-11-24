import { mkdirSync, writeFileSync } from "node:fs";

// One-line autocorrect fail entry: a short message whose meaning flips
// completely because autocorrect swapped in one wrong word.
// The program is deterministic: it always writes this same single line,
// with no trailing newline, well under the 200-character limit.
const line = "Team mating moved to 3pm, bring snacks";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
