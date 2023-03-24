
function create() {
    var task = document.querySelector("#task").value ;
    if(task=='' || task==null){
        alert("Please Enter Task to Create!!");
    }
    else{
        var list = document.querySelector("#tasks");
// TASKS DIV
        var task_list = document.createElement("div");
        task_list.classList.add("tasks");
// CONTENT DIV
        var task_content = document.createElement("div");
        task_content.classList.add("content");
        
        task_list.appendChild(task_content);
// INPUT DIV
        var task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly","readonly");

        task_content.appendChild(task_input);

        list.appendChild(task_list);
        
// NULLIFYING TASK INPUT BOX
        
// EDIT BUTTON
        var edit = document.createElement("input");
        edit.type= 'button';
        //edit.setAttribute("type","button");
        edit.classList.add("edit");
        edit.value = "Edit";
        edit.innerHTML = "Edit";

        task_list.appendChild(edit);

        edit.addEventListener('click', (e) =>{
            if(edit.value == "Edit"){
                edit.value = "Save";
                task_input.removeAttribute("readonly");
                task_input.focus();
            }
            else{
                edit.value = "Edit";
                task_input.setAttribute("readonly","readonly");
            }
        })
// DELETE BUTTON FOR TASK LIST
        var del = document.createElement("input");
        del.setAttribute("type","button");
        del.classList.add("delete");
        del.value = "Delete";
        del.innerHTML = "Delete";

        task_list.appendChild(del);

        del.addEventListener('click', (e) =>{
            var x = confirm("Are you sure you want to delete this task? This action can't be reversed!!");
            if(x==true)
            list.removeChild(task_list);
            else
            e.preventDefault();
        })
// DONE BUTTON
        var done = document.createElement("input");
        done.setAttribute("type","button");
        done.classList.add("done");
        done.value = "Done";
        done.innerHTML = "Done";

        done.addEventListener('click', (e) =>{
            var task_cl = document.getElementById("comp_task");

            var cl_1 = document.createElement('div');
            cl_1.classList.add('cl_1');

            task_cl.appendChild(cl_1);

            var cl_input = document.createElement('input');
            cl_input.type = 'text';
            cl_input.classList.add('cl-input');
            cl_input.value = task_input.value;

            cl_1.appendChild(cl_input);
            
            list.removeChild(task_list);

// DELETE BUTTON
            var del_1 = document.createElement("input");
            del_1.setAttribute("type","button");
            del_1.classList.add("delete_1");
            del_1.value = "Delete";
            del_1.innerHTML = "Delete";

            cl_1.appendChild(del_1);

            del_1.addEventListener('click', (e) =>{
                var x = confirm("Are you sure you want to delete this completed task? This action can't be reversed!!");
            if(x==true)
            task_cl.removeChild(cl_1);
            else
            e.preventDefault();
            
            })

        })

        task_list.appendChild(done);
        document.getElementById("form").reset();
        // create.preventDefault();
    } 
}