---
title: check_double_operator
---


## Reference
The `check_double_operator` function is used to check the amount of operators, which can be passed in but defaults to `*, -, +, /, ^`, and if two operators are beside each other it will throw an error.

### Parameters
Will accept a `list` or `str` value and an optional param that is also a `list`.

### Returns
Returns a `bool` value.

## Usage
```python
from milesianpy.parsers import basic_parser

basic_parser_class = basic_parser.BasicParser
response = basic_parser_class.check_double_operator(list("4.5+3.+456"))
```