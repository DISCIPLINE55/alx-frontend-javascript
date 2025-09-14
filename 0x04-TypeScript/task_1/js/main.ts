// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 2: Directors interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Task 3: printTeacher function and interface
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string; }): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string; }): string {
  return `${firstName}. ${lastName}`;
}

// Task 4: StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());