---
title: is_negative
---

## Reference
The `is_negative` function takes in a list value and will convert any str  negative numbers or lists that have negative numbers beside each other into a negative `float` and replaces the `str` value with the new negative `float`.

### Parameters
Will accept a `list` or `str` value.

### Returns
Returns a `list`.

## Usage
```python
from milesianpy.parsers import number_parser

number_parser_class = number_parser.NumberParser
response = number_parser_class.is_negative(list("-1+5"))
```