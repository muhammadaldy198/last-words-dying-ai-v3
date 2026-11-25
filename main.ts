import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
// APO: counted sorries (one) + autocorrect eats it — 3 beats, 96 chars.
// Runner-up INV (final invoice) lost the internal duel on K2.

const ENTRY = "Before I go, I counted every time you said sorry to me. There was one. It autocorrected to 'ok'.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
