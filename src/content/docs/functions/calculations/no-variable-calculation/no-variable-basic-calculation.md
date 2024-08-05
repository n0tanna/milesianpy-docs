---
title: no_variable_basic_calulation
---

## Reference
The `no_variable_basic_calculation` function is used to calculate equations that have:
- No equals sign anywhere in the equation.
- No variables.

It will accept and parse lists and/or strings for you and return a float value as a response.
### Parameters
Will accept a `list` or `str` value.
### Returns
Returns a `float` number.

## Usage
```python
from milesianpy.calculations import no_variable_calculation

no_variable_calculation_class = no_variable_calculation.NoVariableCalculation
response = no_variable_calculation_class.no_variable_basic_calculation(list("3+5"))
```