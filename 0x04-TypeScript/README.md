# ALX Frontend JavaScript - TypeScript Project

This project contains a series of TypeScript tasks that demonstrate various concepts and features of TypeScript, from basic interfaces to advanced types and namespaces.

Project Structure
text

Copy

Download
alx-frontend-javascript/
└── 0x04-TypeScript/
    ├── task_0/          # Basic interface and DOM manipulation
    ├── task_1/          # Teacher interface and class implementation
    ├── task_2/          # Advanced types and type predicates
    ├── task_3/          # Ambient namespaces and declaration merging
    ├── task_4/          # Namespaces and subject classes
    └── task_5/          # Brand convention and nominal typing
Tasks Overview
Task 0: Creating an interface for a student
Objective: Create a Student interface and render student data in a table

Key Concepts: Basic interfaces, DOM manipulation with TypeScript

Files: task_0/js/main.ts, configuration files

Task 1: Let's build a Teacher interface
Objective: Create interfaces for Teachers and Directors, and implement a Student class

Key Concepts: Interface properties, optional properties, index signatures, class implementation

Files: task_1/js/main.ts

Task 2: Advanced types Part 1
Objective: Implement Director and Teacher classes with type predicates

Key Concepts: Type predicates, string literal types, union types

Files: task_2/js/main.ts

Task 3: Ambient Namespaces
Objective: Create type declarations for external JavaScript libraries

Key Concepts: Ambient declarations, triple-slash directives, type declaration files

Files: task_3/js/interface.ts, task_3/js/crud.d.ts, task_3/js/main.ts

Task 4: Namespace & Declaration merging
Objective: Create subject classes using namespaces and declaration merging

Key Concepts: Namespaces, declaration merging, module organization

Files: task_4/js/subjects/ (all TS files), task_4/js/main.ts

Task 5: Brand convention & Nominal typing
Objective: Implement branded types for nominal typing

Key Concepts: Brand pattern, nominal typing, type differentiation

Files: task_5/js/main.ts

Learning Objectives
By completing this project, you will be able to:

Understand basic types in TypeScript

Work with Interfaces, Classes, and functions

Manipulate the DOM using TypeScript

Use generic types effectively

Implement and use namespaces

Merge declarations appropriately

Use ambient namespaces to import external libraries

Implement basic nominal typing with TypeScript

Prerequisites
Node.js (v12 or higher)

npm or yarn package manager

Basic knowledge of JavaScript and TypeScript

Installation and Setup
Clone the repository:

bash

Copy

Download
git clone https://github.com/DISCIPLINE55/frontend-javascript.git
cd frontend-javascript
Install dependencies for each task:

bash

Copy

Download
# Navigate to each task directory and install dependencies
cd 0x04-TypeScript/task_0
npm install

cd ../task_1
npm install

# Repeat for all task directories
Running the Projects
Each task can be built and run independently:

bash

Copy

Download
# Navigate to the task directory
cd 0x04-TypeScript/task_0

# Build the project
npm run build

# Start development server (for tasks with webpack)
npm run start-dev

# Run tests (if available)
npm test
Configuration Files
Each task directory contains the necessary configuration files:

package.json - Project dependencies and scripts

tsconfig.json - TypeScript compiler configuration

webpack.config.js - Webpack configuration (for tasks 0, 1, 2, 3, 5)

.eslintrc.js - ESLint configuration (for task 0)

Key TypeScript Concepts Demonstrated
Basic Types: Primitive types, arrays, tuples

Interfaces: Defining object shapes, optional properties, readonly properties

Classes: Implementation, constructors, methods

Functions: Typing parameters and return values

Advanced Types: Union types, type guards, type predicates

Namespaces: Organizing code, avoiding global namespace pollution

Declaration Merging: Extending interfaces across files

Ambient Declarations: Describing existing JavaScript libraries

Nominal Typing: Using brand pattern for type differentiation

Development Notes
All TypeScript files use the .ts extension

The compiler is configured with strict type checking (noImplicitAny: true)

Source maps are enabled for debugging

ESLint is configured for TypeScript code quality

Resources
TypeScript in 5 minutes

TypeScript documentation

TypeScript Handbook

Author
DISCIPLINE55

License
This project is part of the ALX Frontend JavaScript curriculum.