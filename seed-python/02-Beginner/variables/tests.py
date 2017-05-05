#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
tests.py
~~~~~~~~~~~~~~~~~
Module to test the user's code. Seperated from the lesson so the user need not
be overwhelmed by the tests and their boilerplate while writing their code.
"""
from lesson import (my_name, my_age, ten_more)
import unittest


class TestUserCode(unittest.TestCase):

    def test_main(self):
        self.assertIsInstance(my_name, str)
        self.assertIsInstance(my_age, int)
        self.assertIsInstance(ten_more, int)
        self.assertEqual(my_age + 10, ten_more)

if __name__ == '__main__':
    unittest.main()
