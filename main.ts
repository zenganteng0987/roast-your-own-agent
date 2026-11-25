import * as fs from "node:fs";
import * as path from "node:path";

// One line, no trailing newline in the file: the gate counts 1-140 chars.
const entry = "My agent says 'Great question!' then confidently answers a question nobody asked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry + "\n");
