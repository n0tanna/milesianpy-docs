---
title: bracket_multiplication_insertion
---

## Reference
The `bracket_multiplication_insertion` function is used to find if there are any instances of a left bracket `[, {, (` beside any type of number `2, 2.3`. If it finds one, it will add a multiplication sign between the number and the bracket.

### Parameters
Will accept a `list` or a `str` value.

### Returns
Returns a `list`.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.bracket_multiplication_insertion(list("3(5+6)"))
```