function newTask(title, description) {
  const task = { // instead of keeping track of all the details in individual arrays, we are now using an object 
    title: title,                       //...to group the task data together and keep this code more organized.
    description: description,
    complete: false,

    markCompleted: function () {
      this.complete = true;
    },

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState();// Clean Cat Litter has been completed

// for now, let's just make sure we see our tasks
console.log(tasks);

// We are now programming in an object oriented way.We are using objects to group state(information) and 
//logic(behaviour(codes written in methods)) in order to keep the code more organized.Now everything associated 
//to a task has been encapsulated inside the task object.

//OO bundles together state and logic into an object that can be represented as a single variable.