---
title: check_if_empty_bracket
---

## Reference
The `check_if_empty_bracket` function is used to check if the passed in equation has and empty set of brackets `{, (, [, ], ), }` and throws an error if it does.

### Parameters
Will accept a `list` or `str` value.

### Returns
Returns a `bool` value.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.check_if_empty_bracket(list("4.5+3.456()"))
```