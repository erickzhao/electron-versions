import * as fs from "fs";

import { Options, Version } from "./shared-types.mjs";

export async function readJson({ jsonPath }: { jsonPath: string }) {
  let data = {};

  try {
    const raw = await fs.promises.readFile(jsonPath, "utf-8");
    data = JSON.parse(raw);
  } catch (error) {
    // File not found? No biggie
  }

  return data;
}

export function getJson(versions: Array<Version>) {
  const data: Record<
    string,
    { electron: string; chromium: string; date: string }
  > = {};

  versions.forEach(({ tag, electron, chromium, date }) => {
    data[tag] = { electron, chromium, date };
  });

  return JSON.stringify(data, undefined, 2);
}

export async function writeJson(
  versions: Array<Version>,
  { jsonPath }: Options
) {
  await fs.promises.writeFile(jsonPath, getJson(versions));
}
