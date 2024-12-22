# Unexpected Behavior of TypeScript's sort Method with Number Comparison

This repository demonstrates an unexpected behavior observed with TypeScript's built-in `sort` method when used for comparing numbers.  The provided `compare` function seems logically correct, yet the sorting results are inconsistent.

The issue is that the `sort` method expects the comparison function to return -1, 0, or 1. However, in some scenarios (not all, this is tricky!), it can yield unexpected results.

## Files:

*   `bug.ts`: Contains the code exhibiting the unexpected behavior.
*   `bugSolution.ts`: Contains the correct approach to sorting numbers in TypeScript.