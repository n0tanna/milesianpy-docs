---
title: check_bracket_count
---

## Reference
The `check_bracket_count` function is used to check the amount of left and right brackets `(, [, {, }, ], )` are in an equation. If the 
amount of the left does not equal the right it will throw an error.

### Parameters
Will accept a `list` or `str` value.

### Returns
Returns a `bool` value.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.check_bracket_count(list("3(5+6)"))
```