const inputValue = document.getElementsByClassName('inputValue')[0]
const titleValue = document.getElementsByClassName('title')[0]
const addTaskBtn = document.getElementsByClassName('btn')[0]

addTaskBtn.addEventListener('click', ()=>{
    if(inputValue.value.trim() !=0 || titleValue.value.trim() !=0){
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        titleList = []
        taskList = [] 
    }else{
        titleList = localItems;
        taskList = localItems;
    }
    titleList.push(titleValue.value)
    taskList.push(inputValue.value)
    localStorage.setItem('localItem', JSON.stringify(titleList))
    localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    
    showTitle()
    showList()
})


function showTitle(){
    let outPut = '';
    let taskTitleShow = document.querySelector('.todoTitle')
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        titleList = []
    }else{
        titleList = localItems;
    }
    titleList.forEach((data,index)=>{
        outPut += `
        <h1>${data}
        <button class="del" onclick="deleteItem(${index})"><i class="fa-solid fa-trash delete(${index})"></i></button>
        </h1>`
    });

    taskTitleShow.innerHTML = outPut;
}


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

showTitle()
showList()

function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    titleList.splice(index,1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    localStorage.setItem('localItem', JSON.stringify(titleList))
    showTitle()
    showList()
}

function clearTask(){
    localStorage.clear()
    showTitle()
    showList()
}