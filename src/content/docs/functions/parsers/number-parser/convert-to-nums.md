---
title: convert_to_nums
---

## Reference
The `convert_to_nums` function takes in a list value and will convert any str numbers or lists that have numbers beside each other into a `float` and replaces the `str` value with the new `float`.

### Parameters
Will accept a `list` or `str` value.

### Returns
Returns a `list`.

## Usage
```python
from milesianpy.parsers import number_parser

number_parser_class = number_parser.NumberParser
response = number_parser_class.convert_to_nums(list("4.5+3.456"))
```