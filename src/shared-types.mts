export interface Options {
  cwd: string;
  filter: string;
  allowedPrereleases: string[];
  length: number;
  onProgress?: (done: number, left: number, total: number) => void;
  mdPath: string;
  jsonPath: string;
  defaultBranch: string;
}

export interface Version {
  tag: string;
  electron: string;
  chromium: string;
  date: string;
}
