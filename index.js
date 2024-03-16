
let toastBox = document.getElementById('toastMenu');

let saved = `<i class="fa-solid fa-circle-check"></i>Saved Successfully`;
let del = `<i class="fa-solid fa-triangle-exclamation"></i> Just Kidding, chill!`;
let hacker = `<i class="fa-solid fa-skull"></i>Zhehaha You got hacked!`;
let go = `<i class="fa-solid fa-circle-xmark"></i>Couldn't close please try again`;

// Function to show the snackbar menu
function showToast(input) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = input;
    toastBox.appendChild(toast);

    if(input.includes('Saved')){
        toast.classList.add('saved');
    }
    if(input.includes('Kidding')){
        toast.classList.add('alert');
        setTimeout(() => alert(('Your computer is self-destructing'), 3000));
    }
    if(input.includes('hacked')){
        toast.classList.add('hacked');
    }
    if(input.includes('close')){
        toast.classList.add('close');
    }

    setTimeout(() =>{ toast.remove()}, 5000)
}
  