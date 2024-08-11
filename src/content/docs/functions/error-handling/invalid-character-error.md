---
title: invalid_character_error
---

## Reference
A class that overrides the Exception class.

### Parameters
Will accept a `str` value.

### Returns
Exception

## Usage
```python
from milesianpy.error_handling import invalid_character_error

invalid_character_error_class = invalid_character_error.InvalidCharacterError

try:
  # Your code here
except invalid_character_error_class:
  # Do stuff here
```