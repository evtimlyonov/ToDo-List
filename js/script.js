const button = document.querySelector('button');
button.addEventListener('click', addToDo);

function addToDo(e) {
    e.preventDefault();
    const input = document.querySelector('input').value;

    if (input === '') {
        document.getElementById('error').textContent = 'Please fill the input field.';
    } else {
        document.getElementById('error').textContent = '';
        const list = document.querySelector('ul');
        const todo = document.createElement('li');
        todo.textContent = input;
        todo.addEventListener('click', clickedLi);
        list.appendChild(todo);
        document.querySelector('input').value = '';
        document.querySelector('input').focus();
    }
    footerCount();
};

const footer = document.querySelector('footer');
const footerCounter = document.createElement('p');

function footerCount() {
    const allLiElements = document.querySelectorAll('li');
    const num = [...allLiElements].filter(e => e.style.textDecoration !== 'line-through');
    footerCounter.textContent = `You have ${num.length} task${num.length > 1 ? 's' : ''} to do!`;
    footer.appendChild(footerCounter);

    if (num.length === 0) {
        footer.removeChild(footerCounter);
    }

}

function clickedLi(e) {
    if (e.target.style.textDecoration === 'line-through') {
        e.target.style.textDecoration = ''
        footerCount();

    } else {
        e.target.style.textDecoration = 'line-through';
        footerCount();
    }
}