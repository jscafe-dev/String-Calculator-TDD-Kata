# String Calculator TDD Kata

This repository contains a **String Calculator** project developed using **Test-Driven Development (TDD)** principles in **Node.js**. The purpose of this project is to implement a calculator that processes strings to sum numbers, following a structured development process where each functionality is added and verified through incremental tests.

## Project Overview

The String Calculator supports the following functionalities:

- Handles empty strings and single numbers.
- Sums multiple comma-separated numbers.
- Supports newline characters as delimiters.
- Allows custom delimiters in the format `//[delimiter]\n[numbers]`.
- Throws an error when encountering negative numbers, listing all negative values.

Each feature was implemented incrementally following the TDD approach, with changes documented in the commit history.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jscafe-dev/String-Calculator-TDD-Kata.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd String-Calculator-TDD-Kata
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running Tests

To validate the functionality of the String Calculator, tests have been written using **Jest**. To run the test suite:

```bash
npm test
```
