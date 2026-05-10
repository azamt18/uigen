Run a thorough audit of the codebase and report findings grouped by category. For each issue include the file path, line number, and a one-line description.

## 1. Security

- Check `src/actions/` and `src/app/api/` for missing auth checks (routes/actions that modify data without calling `getSession`)
- Check for unsanitized user input passed to Prisma queries
- Check JWT config in `src/lib/auth.ts` — algorithm, expiry, secret sourcing
- Check for secrets or API keys hardcoded anywhere (grep for `sk-`, `secret`, `password` literals)
- Check that passwords are always hashed before persistence

## 2. Type safety

- Find `any` casts in `src/` — report each occurrence
- Find non-null assertions (`!`) on values that could realistically be null

## 3. Error handling

- Find `async` functions in `src/actions/` and `src/app/api/` that have no try/catch or error boundary
- Find unhandled promise rejections (floating `.then()` / `await` outside try/catch in critical paths)

## 4. Tests

- Run `npx vitest run` and report pass/fail counts
- List source files in `src/lib/` and `src/components/` that have no corresponding test file

## 5. Dependencies

- Run `npm audit` and summarize vulnerabilities by severity
- Check `package.json` for dependencies that are only used in one place and could be removed

## 6. Dead code

- Find exported functions/components in `src/` that are never imported elsewhere
- Find files in `src/` that are never imported

## Output format

For each category, list findings as a markdown checklist. Mark items with no issues as ✅. End with a summary count: `X issues found across Y categories`.
