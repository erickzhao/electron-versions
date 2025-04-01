# 4.0.1

- Keeps `origin/` prefix when fetching default branch object name.

# 4.0.0

- Fork to `@erickzhao` namespace.
- Requires Node 22 or higher.
- Rewritten in ESM.
- Replaces deleted `text-table` library with `console.table`.
- Fixes bug where default branch can't be fetched from tags.
- Tests were broken on `master` so they've been removed.

# 3.0.0

- Major refactor: Make everything faster.

# 2.1.3

- Actually built code before publishing :lolcry:

# 2.1.2

- Ensure that we parse "master" fresh

# 2.1.1

- Add "date" to JSON output

# 2.1.0

- Add date of last commit to output

# 2.0.2

- Fix import errors

# 2.0.1

- Fix a small export error
- Fix JSON indent

# 2.0.0

- Moved to TypeScript
- Write results to a JSON file that can be used to only check new tags in the future
- Changed some of the CLI parameters

# 1.3.1

- Handle the default branch first, ensuring it's at the top of results

# 1.3.0

- Add a `--write` option that allows writing the results to a markdown
  file

# 1.2.0

- Enable usage of the module "as a module" from code

# 1.0.0

- Initial release
