#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person;
const programStart = async (persons) => {
    do {
        console.log(chalk.magenta("\n\t\ Wellcome to my Project! \t\n"));
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.green("Whom would you like to intercct with?"),
                choices: ["Staff", "Student", "Exit"]
            }
        ]);
        if (ans.select == "Staff") {
            console.log(chalk.red("You approach the staff room.Please feel free to ask any question"));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: chalk.yellow("Enter's the student name you wish to engage with:")
                }
            ]);
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.blue(`Hello! I m ${name.name}. Nice to meet you!`));
                console.log(chalk.green("New Student added"));
                console.log(chalk.red("Current Student list:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.green(`Hello! I m ${student.name}.Nice to meet you again!`));
                console.log(chalk.red("Existing student List:"));
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.blue("Exiting the Program..."));
            process.exit();
        }
    } while (true);
};
programStart(persons);
