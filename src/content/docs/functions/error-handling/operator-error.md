---
title: bracket_error
---

## Reference
A class that overrides the Exception class.

### Parameters
Will accept a `str` value.

### Returns
Exception

## Usage
```python
from milesianpy.error_handling import operator_error

operator_error_class = operator_error.OperatorError

try:
  # Your code here
except operator_error_class:
  # Do stuff here
```