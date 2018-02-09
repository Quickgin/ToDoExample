Backendless.initApp("1784B94D-D3F2-3682-FF8B-024705384700","C8964FDE-108D-BE63-FF50-4159D04B2B00");

$(document).on("pageshow","#todopage", onPageShow);

function onPageShow() {
    Backendless.Data.of("TASKS").find().then(processResults).catch(error);
	console.log("page shown");
}

function processResults(tasks) {
   //display the first task in an array of tasks. 
alert(tasks[0].Task);
alert(tasks[1].Task);
//wipe the list clean
$('#taskList').empty();

//add each tasks
for (var i = 0; i < tasks.length; i++) { 
  $('#taskList').append("<li>"+tasks[i].Task+"</li>");
    
//refresh the listview
$('#taskList').listview('refresh');
}

}

function error(err) {
    alert(err);
}




$(document).on("click", "#addTaskButton", onAddTask);

	function onAddTask() {
		console.log("add task button clicked");
        var tasktext = $('#addTaskText').val();
        var newTask = {};
        newTask.Task = tasktext;
        Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);
	}
 
function saved(savedTask) {
console.log( "new Contact instance has been saved" + savedTask);
}

