---
title: standardize_brackets
---


## Reference
Changes all brackets that the user has specified to '(' or ')'.

### Parameters
Will accept a `list` or `str` value.

### Returns
Returns a `list`.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.standardize_brackets(list("4.5+3.456"))
```