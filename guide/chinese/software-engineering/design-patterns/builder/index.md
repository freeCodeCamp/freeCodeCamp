---
title: Builder
localeTitle: 生成器
---
构建器是一种设计模式，可以抽象和分离非常复杂的对象的创建。

## Python中的生成器

以下是Python3中Builder模式实现的示例。

```python
# Builder 
 class CourseBuilder(object): 
    def __init__(self, teacher): 
        self.teacher = teacher 
 
    def build_course(self): 
        self.teacher.provide_homework() 
        self.teacher.provide_exam() 
        return self.teacher.course 
 
 # Teacher 
 class Teacher(object): 
    def __init__(self, name=None): 
        self.name = name 
        self.course = Course() 
 
    def provide_homework(self): 
        raise NotImplementedError 
 
    def provide_exam(self): 
        raise NotImplementedError 
 
 
 class MathTeacher(Teacher): 
    def provide_homework(self): 
        self.course.homework = 'This is Math homework provided by {}.'.format(self.name) 
 
    def provide_exam(self): 
        self.course.exam = 'This is Math exam tested by {}.'.format(self.name) 
 
 
 class HistoryTeacher(Teacher): 
    def provide_homework(self): 
        self.course.homework = 'This is History homework provided by {}.'.format(self.name) 
 
    def provide_exam(self): 
        self.course.exam = 'This is History exam tested by {}.'.format(self.name) 
 
 
 # Target objects to be produced 
 class Course(object): 
    def __init__(self): 
        self.homework = None 
        self.exam = None 
 
    def __str__(self): 
        return 'Homework: {}\nExam: {}\n'.format(self.homework, self.exam) 
 
 
 math_course = CourseBuilder(MathTeacher('Harry')).build_course() 
 print(math_course) 
 >>> Homework: This is Math homework provided by Harry. 
 >>> Exam: This is Math exam tested by Harry. 
 
 history_course = CourseBuilder(HistoryTeacher('Potter')).build_course() 
 print(history_course) 
 >>> Homework: This is History homework provided by Potter. 
 >>> Exam: This is History exam tested by Potter. 

```