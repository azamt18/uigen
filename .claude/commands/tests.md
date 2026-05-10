Run the full test suite and report results.

## Steps

1. Run `npx vitest run` and capture output.
2. Report pass/fail counts per test file.
3. If any tests fail, show the failure messages with file path and line number.
4. If all pass, confirm with total count.

## Output format

```
Test results: X passed, Y failed across Z files

[If failures:]
FAILED src/...:line — description
```
