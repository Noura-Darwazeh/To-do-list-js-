console.log("***************************");
console.log("Welcome to JS TODO-APP");
console.log("***************************");
console.log("Select an action:");
console.log("1) Add a new task");
console.log("2) List all tasks");
console.log("3) List completed tasks");
console.log("4) Mark the task as done");
console.log("5) Delete a task");
console.log("6) Sort tasks by the due date");
console.log("7) Sort tasks by priority");
console.log("8) Clear all tasks");
console.log("***************************");
let tasks = [
    {description:'study',dueDate:'2/10',priority:4, completed:'false'},
    {description:'eat',dueDate:'4/10',priority:3, completed:'false'},
    {description:'sleep',dueDate:'1/10',priority:2, completed:'false'},
    {description:'work',dueDate:'7/10',priority:1, completed:'true'}    
  ];
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("What's your choice?",(number) => {
    if(number === '1')
    {
        addAnewTasks();
    }
    else if (number === '2')
    {
        showAllTasks();
    }
    else if (number === '3')
    {
      listCompletedTasks();
    }
    else if(number === '4')
    {
        
        completedAtask();
    }
    else if(number === '5')
    {
        deleteAtask();
       
    }
    else if (number === '6')
    {
      sortTasksByTheDueDate();
    }
    else if(number === '7')
    {
      sortTasksTyPriority();
    }
    else if (number === '8')
    {
        clearAllTasks();
    }
    else if (number === '9')
    {
        r1.close();
    }
    else {
      console.log('invalid number');
    }
    });
    function Task(description,dueDate,priority,completed){
      this.description =description;
      this.dueDate=dueDate;
      this.priority=priority;
      this.completed=completed;
  }
    function addAnewTasks()
    {
       var description= r1.question("Enter a new task ",(description)=>{
       var dueDate= r1.question("Enter a due to date task ",(dueDate)=>{
       var priority=  r1.question("Enter a priority task ",(priority)=>{
       var completed=  r1.question("if the task is completed? ",(completed)=>{
       var task = new Task(description, dueDate, priority, completed);
       tasks.push({description,dueDate,priority,completed});
       console.log("Task added: " + description);
       console.log("Task com: " + completed);
      showAllTasks();
     });
        });
             });
            });
    }
    function showAllTasks()
    {
        console.log("This is your tasks:");
        for(let i =0;i<tasks.length;i++)
        {
            var task = tasks[i];
            console.log(i+1+")" + "Description :" + task.description);
            console.log("Due Date:" + task.dueDate);
            console.log("priority:" + task.priority);
            console.log("completed:" + task.completed);
        }
    }
    function clearAllTasks()
    {
        showAllTasks();
        console.log(tasks);
        tasks=[];
        console.log(tasks);
        showAllTasks();
    }
    function deleteAtask()
    {
        showAllTasks();
        r1.question("Enter number of task that you want to delete ",(oldTask)=>{
            
            for (let k = 0; k<tasks.length;k++)
            {
                if(oldTask-1===k)
                {
                    tasks.splice(k,1);
                }
            }
            showAllTasks();
            });
    }
    function completedAtask()
    {
      showAllTasks();
      r1.question("Enter number of task which done : ",(index)=>{
      tasks[index-1].completed=true;
      showAllTasks();
        });
    }
    function listCompletedTasks()
    {
      const completedTasks = tasks.filter((theTask)=>theTask.completed==='true');
      console.log(completedTasks);
    }
    function sortTasksTyPriority(){
    tasks.sort((a,b)=>a.priority-b.priority);
    console.log(tasks);
    }
    function sortTasksByTheDueDate(){
      tasks.sort((a,b)=> new Date (a.dueDate)-new Date(b.dueDate));
      console.log(tasks);
    }



