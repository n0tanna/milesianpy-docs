---
title: exponent
---

## Reference
The `exponent` function will take the left value and put it to the power of the right value.

### Parameters
Will accept a `list` of 2 `float` or `int` 2 types.

### Returns
Returns a `float`.

## Usage
```python
from milesianpy.parsers import operator_parser

operator_parser_class = operator_parser.OperatorParser
response = operator_parser_class.exponent([2.0, 4.0])
```