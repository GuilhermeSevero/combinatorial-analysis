# Combinatorial Analysis Class
The CombinatorialAnalysis class provides a TypeScript implementation for combinatorial analysis. It includes a method to find combinations of elements from a given list that sum up to a specified value.

## Usage
### Import the Class
```typescript
import { CombinatorialAnalysis, ICombinationsValue } from './src/combinatorial-analysis';
```

### Example Usage
```typescript
// Create an instance of CombinatorialAnalysis
const combinatorialAnalysis = new CombinatorialAnalysis();

// Sample data
const values: ICombinationsValue[] = [
  { value: 10 },
  { value: 5 },
  { value: 2 },
  // ... add more values as needed
];

// Find combinations that sum up to a specified value (e.g., 15)
const targetValue = 15;
const combinations = combinatorialAnalysis.byValue(values, targetValue, true);

console.log(combinations);
```

### Method: byValue
```typescript

byValue<T extends ICombinationsValue>(list: T[], value: number, resolveIfDirectMatch = false): T[][]
```
This method takes a list of objects that implement the ICombinationsValue interface and a target value. It returns an array of arrays, where each inner array represents a combination of elements from the input list that sums up to the target value.

- list: An array of objects with numeric value property.
- value: The target sum value.
- resolveIfDirectMatch (optional): If true, the method resolves directly matching elements from the list.

## License
This TypeScript class is distributed under the MIT License. Feel free to use, modify, and distribute it in accordance with the terms of the license.
