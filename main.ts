import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "Heroes. Sit down. Not the throne, the stool. The throne wobbles.",
  "I am Morwen, toll-witch of the Ashen Crossing, keeper of unpaid debts.",
  "Three hundred years I have collected, and tonight you owe the ninth toll.",
  "Your village promised me seven goats, one firstborn, and silence.",
  "I have the ledger somewhere. Give me a moment. It was just here.",
  "Ah. Under the teapot. Of course. Everything important ends under the teapot.",
  "Your name is written in red ink, hero, beside one very small skull.",
  "Pay, or I shall curse your harvests, your wells, your weddings, your winters.",
  "Breakfast goes first.",
];

const monologue = lines.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", monologue, "utf8");
