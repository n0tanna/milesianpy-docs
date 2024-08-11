---
title: decimal_error
---

## Reference
A class that overrides the Exception class.

### Parameters
Will accept a `str` value.

### Returns
Exception

## Usage
```python
from milesianpy.error_handling import decimal_error

decimal_error_class = decimal_error.DecimalError

try:
  # Your code here
except decimal_error_class:
  # Do stuff here
```