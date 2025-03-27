import { markdownTable } from "markdown-table";

import { getRepoUrl } from "./package.mjs";
import { Options, Version } from "./shared-types.mjs";

export function printTextTable(versions: Array<Version> = []) {
  const rows: Record<
    string,
    { electron: string; chromium: string; date: string }
  > = {};

  for (const { tag, electron, chromium, date } of versions) {
    rows[tag] = {
      electron,
      chromium,
      date,
    };
  }

  return console.table(rows);
}

export async function getMarkdownTable(
  versions: Array<Version> = [],
  options: Options
) {
  const rows = [["Tag", "Electron", "Chromium"]];
  const repoUrl = await getRepoUrl(options);

  for (let i = 0; i < versions.length; i++) {
    let { tag, electron, chromium } = versions[i];

    if (repoUrl) {
      // First entry will be the default branch, not a tag
      if (i === 0) {
        tag = `[${tag}](${repoUrl})`;
      } else {
        tag = `[${tag}](${repoUrl}/releases/tag/${tag})`;
      }
    }

    electron = `[${electron}](https://github.com/electron/electron/releases/tag/v${electron})`;

    rows.push([tag, electron || "?", chromium || "?"]);
  }

  return markdownTable(rows);
}
