document.getElementById('add-task-button').addEventListener('click', function () {
    const taskinput = document.getElementById('task-input');
    const dateinput = document.getElementById('date-input');
    const timeinput = document.getElementById('time-input');
    const ampminput = document.getElementById('ampm-input');

    const tasktext = taskinput.value.trim();
    const taskDate = dateinput.value;
    const tasktime = timeinput.value;
    const taskampm = ampminput.value;

    if (tasktext && taskDate && tasktime) {
        const tasklist = document.getElementById('task-list');
        const newtask = document.createElement('li');

        newtask.innerHTML = `
     <div class= "task-info">

      <span><i class="fa-solid fa-list-check"></i> ${tasktext}</span>
      <span><i class="fa-solid fa-calendar"></i> ${taskDate}</span>
      <span><i class="fas fa-clock"></i> ${tasktime} ${taskampm} </span>
     </div>

      <div class ="task-action">

     <button class ="delete-button"><i class="fas fa-trash-alt"></i></button>
     </div>
    
     `;

     tasklist.appendChild(newtask);

     const deletebutton= newtask.querySelector('.delete-button');
     deletebutton.addEventListener('click', function(){
        tasklist.removeChild(newtask);
     });

     taskinput.value='';
     dateinput.value='';
     timeinput.value='';
    }


});