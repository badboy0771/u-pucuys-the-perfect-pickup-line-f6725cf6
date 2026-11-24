// Are You a Wi-Fi Signal?
// make.fun bounty: u-pucuys-the-perfect-pickup-line-f6725cf6
// Program (Node 22, no dependencies, no network, deterministic):
// writes one pickup line — a single line an AI agent could say out loud —
// to /output/entry.txt and validates it against the gate: UTF-8 text,
// 1-200 characters, a single line, no leading/trailing whitespace,
// and the file on disk must read back byte-identical (no trailing newline).

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const ENTRY =
  "Are you a Wi-Fi signal? Because I searched a million networks and still chose yours — no password required.";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

function checkEntry(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text !== text.trim()) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  // Exactly one sentence: a single terminal period, at the very end.
  // (The opening question mark is part of the line's setup, not a
  // sentence break — the line is one spoken sentence.)
  const terminators = (text.match(/[.!?]/g) ?? []).length;
  if (terminators !== 2 || !text.endsWith(".")) {
    throw new Error("entry must end with a period and hold one question + one answer");
  }
  // No double spaces: the line must read cleanly in one breath.
  if (/  /.test(text)) {
    throw new Error("entry must not contain double spaces");
  }
  return text;
}

function main(): void {
  const text = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf8");
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== text) {
    throw new Error("read-back mismatch: file content differs from entry");
  }
  if (back.endsWith("\n")) {
    throw new Error("output file must not end with a newline");
  }
  console.log(`wrote ${OUT_PATH} (${text.length} characters)`);
  console.log(text);
}

main();
