---
title: Null-coalescing Operator
---

# Null-coalescing Operator

Null-coalescing operators (??) allow to define a default value for nullable value types or reference types. It returns the left-hand operand if the operand is not null; otherwise it returns the right operand.
##
```
Address address = null;
if (employee.Address != null)
{
    address = employee.Address;
}
else
{
    address = defaultAddress;
}
```
You could use a standard conditional operator to make that check more concise:
##
```
Address address = employee.Address != null ? employee.Address : defaultAddress;
```
However, in C# 6.0 null-conditional operators were introduced, so now the above line can simply
be represented as follows:
##
```
Address address = employee.Address ?? defaultAddress;
```
If employee.Address is null, address will simply be assigned the defaultAddress value.

You can use null-coalescing operator with [null-conditional operator](/csharp/null-conditional-operator) together:
##
```
Address address = employee?.Address ?? defaultAddress;
```
Now, if employee is null or employee.Address is null, address will simply be assigned defaultAddress value.

Null-conditional operators are short-circuiting, so as soon as one check of conditional member access
returns not null, the rest do not take place.
