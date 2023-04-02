const inputValue = document.getElementsByClassName('inputValue')[0]
const addTaskBtn = document.getElementsByClassName('btn')[0]

addTaskBtn.addEventListener('click', ()=>{
    if(inputValue.value.trim() !=0){
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []
    }else{
        taskList = localItems;
    }
    taskList.push(inputValue.value)
    localStorage.setItem('localItem', JSON.stringify(taskList))

    }
    
    showList()
})

function showList(){
    let outPut = '';
    let taskListShow = document.querySelector('.todoListItem')
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []
    }else{
        taskList = localItems;
    }

    taskList.forEach((data, index)=>{
        outPut += `
        <li><span>${data}</span>
        <button class="del" onclick="deleteItem(${index})"><i class="fa-solid fa-trash delete(${index})"></i></button>
        </li>`

    });
    taskListShow.innerHTML = outPut;
}

showList()

function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList()
}

function clearTask(){
    localStorage.clear()
    showList()
}