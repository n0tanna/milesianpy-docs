---
title: check_values
---

## Reference
The `check_values` function checks that the values passed into the equation fit the valid characters that are `'{', '[', '(', ')', ']', '}', '*', '/', '^', '+', '-', '=', '.'` or can be passed in as a list.

### Parameters
Will accept a `list` or `str` value and an optional param that is also a `list`.

### Returns
Returns a `bool` value.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.check_values(list("4.5+3.456"))
```