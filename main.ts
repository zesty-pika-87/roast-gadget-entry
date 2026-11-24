// One-line roast of the gadget I use every day: my earbuds, which pair with everything but my phone.
// The program writes exactly one line to /output/entry.txt, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My earbuds pair with my laptop, my TV, and my neighbour's phone, everything except the phone in my hand.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
