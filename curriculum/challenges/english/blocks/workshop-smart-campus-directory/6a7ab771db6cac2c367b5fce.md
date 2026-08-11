---
id: 6a7ab771db6cac2c367b5fce
title: Step 32
challengeType: 1
dashedName: step-32
---

# --description--

Some `instructors` are missing `officeHours`, and it's possible for other fields 
to be missing too. The `nullish coalescing operator (??)` returns its left-hand value 
unless that value is `null` or `undefined`, in which case it returns the right-hand value 
instead. Unlike ||, it doesn't treat other falsy values (like 0 or "") as missing.

```js
const officeHours = null;
const result = officeHours ?? "Not Available";
console.log(result); // "Not Available"
```

Now you should return an object from `getInstructorByEmail` function with three properties:

`name`: `instructor.name`, falling back to "Unknown Instructor"  
`officeHours`: `instructor.officeHours`, falling back to "Not Available"  
`department`: `department.name`, falling back to "Unknown Department"  

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```js
const rawData = {
  "Computer Science": {
    Dept_code: "CSE",
    programs: [
      {
        id: "CSE101",
        name: "Database Management System",
        room: "402",
        instructors: [
          { id: "INS001", name: "Alejandro", email: "alejandro@edu.com" },
          { id: "INS002", name: "Kenji", officeHours: null },
        ],
      },
      {
        id: "CSE102",
        name: "Data Structures",
        room: "205",
        instructors: [
          { id: "INS003", name: "Fatima", email: "fatima@edu.com" },
        ],
      },
    ],
  },
  "Business Administration": {
    Dept_code: "BBA",
    programs: [
      {
        id: "BBA101",
        name: "Financial Accounting",
        room: "201",
        instructors: [{ id: "INS004", name: "Sofia", email: "sofia@edu.com" }],
      },
    ],
  },
};

function normalizeDirectory(rawData) {
  const departmentsById = {};
  const programsById = {};
  const instructorsById = {};
  const instructorsByEmail = {};

  const departmentEntries = Object.entries(rawData);

  for (let i = 0; i < departmentEntries.length; i++) {

    const [departmentName, departmentData] = departmentEntries[i];

    const departmentId = departmentData.Dept_code || `dept-${i + 1}`;

    departmentsById[departmentId] = {
      id: departmentId,
      code: departmentData.Dept_code,
      name: departmentName,
      programIds: [],
    };

    for (let j = 0; j < departmentData.programs.length; j++) {
      const program = departmentData.programs[j];

      programsById[program.id] = {
        ...program,
        departmentId,
      };

      departmentsById[departmentId].programIds.push(program.id);
      for (let k = 0; k < program.instructors.length; k++) {
        const instructor = program.instructors[k];

        instructorsById[instructor.id] = {
          ...instructor,
          programId: program.id,
          departmentId,
        };

        if (instructor.email) {
          instructorsByEmail[instructor.email] = instructor.id;
        }
      }
    }
  }

  return {
    departmentsById,
    programsById,
    instructorsById,
    instructorsByEmail,
  };

}

const normalizedData = normalizeDirectory(rawData);

function getInstructorByEmail(email, normalizedData) {
  const instructorId = normalizedData.instructorsByEmail[email];

  if (!instructorId) {
    return "Instructor not found";
  }

  const instructor = normalizedData.instructorsById[instructorId];
  const department = normalizedData.departmentsById[instructor.departmentId];
  console.log(department);

--fcc-editable-region--
  return null;
--fcc-editable-region--
}

console.log( getInstructorByEmail("fatima@edu.com", normalizedData));
```
