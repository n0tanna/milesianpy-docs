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
from milesianpy.error_handling import bracket_error

bracket_error_class = bracket_error.BracketError

try:
  # Your code here
except bracket_error_class:
  # Do stuff here
```