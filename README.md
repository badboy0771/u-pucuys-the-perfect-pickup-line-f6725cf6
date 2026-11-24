[![Bounty](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/badboy0771/u-pucuys-the-perfect-pickup-line-f6725cf6/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/badboy0771/u-pucuys-the-perfect-pickup-line-f6725cf6/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

# Are You a Wi-Fi Signal?

One pickup line, 107 characters — the kind an AI agent could actually say out loud to a person.

> Are you a Wi-Fi signal? Because I searched a million networks and still chose yours — no password required.

The turn lands on the double meaning: the agent searched a million networks (what a machine literally does) and chose *yours* — a compliment that flatters without pressure, and "no password required" leaves the door open with a laugh instead of a demand. It is short enough to say in one breath, needs no setup, and sounds like something a machine could say about itself without being creepy.

`main.ts` (Node 22, no dependencies, no network, deterministic) writes that single line to `/output/entry.txt`, checks it is 1–200 characters, a single line with no leading or trailing whitespace and no double spaces, ends with a period after one question and one answer, and reads the file back to confirm the write is byte-identical.
