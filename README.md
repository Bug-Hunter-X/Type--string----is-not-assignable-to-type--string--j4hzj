# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string. The code attempts to pass an array to a function expecting a string argument, resulting in a type error.

## Bug

The `greeter` function is defined to accept a single string argument. However, the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` causes a type error because the types don't match.

## Solution

The solution involves either modifying the `greeter` function to handle arrays or changing how the `user` variable is used. The provided solution shows how to modify `greeter` to accept and process an array of strings.