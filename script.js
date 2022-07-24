const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click',addBookToLibrary);

let myLibrary = [{Title:'hello',Author:'world',Pages:10,Read:true}];

displayLibrary();

class Book {
    constructor(title, author, pages, read) {
        this.Title = title;
        this.Author = author;
        this.Pages = pages;
        this.Read = read;
    }
}

function addBookToLibrary() {
    const titleIn = document.querySelector('#title').value;
    const authorIn = document.querySelector('#author').value;
    const pagesIn = document.querySelector('#pages').value;
    const readIn = document.querySelector('#read').checked;
    myLibrary.push(new Book(titleIn,authorIn,pagesIn,readIn));
    const form = document.querySelector('form');
    form.reset();
    displayLibrary();
}

/* for (let i of myLibrary) {
    const tbody = document.querySelector('#tbody');
    const trOut = document.createElement('tr');
    for (let j of Object.values(i)) {
        const tdOut = document.createElement('td');
        tdOut.textContent = j;
        trOut.appendChild(tdOut);
    }
    tbody.appendChild(trOut);
} */

function displayLibrary() {
    const tbody = document.querySelector('#tbody');
    tbody.textContent = '';
    for (let i of myLibrary) {
        const trOut = document.createElement('tr');
        /* trOut.setAttribute('data-index',myLibrary.indexOf(i)) */
        for (let j in i) {
            const tdOut = document.createElement('td');
            if (i[j] === true || i[j] === false) {
                const inputOut = document.createElement('input');
                tdOut.appendChild(inputOut);
                inputOut.setAttribute('type','checkbox');
                inputOut.checked = (i[j] === true);
                inputOut.addEventListener('click', () => {
                    i[j] = !i[j];
                })
            }
            else {
                tdOut.textContent = i[j];
            }
            trOut.appendChild(tdOut);
        }
        const tdOut = document.createElement('td');
        const buttonOut = document.createElement('button');
        tdOut.appendChild(buttonOut);
        trOut.appendChild(tdOut);
        buttonOut.setAttribute('type','button');
        buttonOut.textContent = 'Delete';
        buttonOut.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(i),1);
            displayLibrary();
        })
        tbody.appendChild(trOut);
    }
}