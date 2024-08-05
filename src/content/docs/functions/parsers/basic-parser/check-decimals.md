---
title: check_decimals
---

## Reference
The `check_decimals` function is used to verify if decimal numbers have been written correctly within the equation.

### Parameters
Will accept a `list` or `str` value.

### Returns
Returns a `bool` value.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.check_decimals(list("4.5+3.456"))
```