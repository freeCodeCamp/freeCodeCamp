"""
@decorators
~~~~~~~~~~~

Python `@decorators` might look a bit scary at first, until one realizes
they're really just syntastical sugar for a function returning another
function.
"""
from functools import wraps


def make_sandwich(func):
    """
    This function wraps around 
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        """
        This function is used to wrap around the `func` passed in. Note how
        `print` is called before and after the acutal fucntion call.
        """
        print('bread')
        func(*args)
        print('bread')
    return wrapper


@make_sandwich
def add_filling(filling):
    print(filling)


add_filling('peanut butter')
print('-----')
make_sandwich(add_filling('peanut butter'))
