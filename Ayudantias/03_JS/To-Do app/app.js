var pending_tasks = [];
var done_tasks = [];
var counter = 0;


function create_task(){
    var input_elemt = document.querySelector("input");
    var container_elemt = document.querySelector(".pending-tasks");
    var task = input_elemt.value

    var idx = counter
    pending_tasks.push(task)
    input_elemt.value = ""

    var elmt = `<div id="row-${idx}" class="row">
        <span class="task-text">${task}</span>
        <div>
            <button onclick="delete_pending_task(${idx})">
                <img class="icon" src="images/trash-icon.png" alt="Trash icon"> Delete
            </button>
            <button onclick="done_pendig_task(${idx})">
                <img class="icon" src="images/icon-tick.png" alt="Tick icon"> Done
            </button>
        </div>
    </div>`

    container_elemt.innerHTML += elmt
    counter += 1;
}

function delete_pending_task(idx){
    // pending_tasks.splice(idx, 1);
    var elemt = document.querySelector(`#row-${idx}`)
    elemt.remove()
}

function done_pendig_task(idx){
    var task = pending_tasks[idx];
    done_tasks.push(task)
    var container_elemt = document.querySelector("table")
    delete_pending_task(idx)

    var elemt = `<tr id="row-${idx}" >
        <td>
            <hr id="line">
            <span class="task-text striked">${task}</span>
        </td>
        <td>
            <button onclick="delete_pending_task(${idx})">
                <img class="icon" src="images/trash-icon.png" alt="Trash icon"> Delete
            </button>
        </td>
    </tr>`

    container_elemt.innerHTML += elemt;

}