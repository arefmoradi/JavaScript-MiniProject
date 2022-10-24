// UI vars

let form = document.querySelector('#book-list');
let title = document.querySelector('#title');
let auther = document.querySelector('#author');
let isbn = document.querySelector('#isbn');
let submit = document.querySelector('#submit');
let book_list = document.querySelector('#book-list');
let book_list2 = document.querySelector('#book-list2');
let container = document.querySelector('.container')


class Book {
constructor(title,auther,isbn){
    this.title = title;
    this.auther = auther;
    this.isbn = isbn;
};
}

class BookList {

    static addBookToList (book){

        let tr = document.createElement('tr');
        tr.innerHTML = ` 
        <td> ${book.title} </td>
        <td> ${book.auther} </td>
        <td> ${book.isbn} </td>
        <td> <a class='delete' href='#'> X </a> </td>
        `

        book_list2.appendChild(tr);
        Store.addBook(book);
    }

    static deleteBookToList(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
        Store.removeBook(target.parentElement.previousElementSibling.textContent)

    }

    static showMessage(msg, alertClass){
        let alertDiv = document.createElement('div');
        alertDiv.textContent = msg;
        alertDiv.className = `alert ${alertClass}`;     
        container.insertBefore(alertDiv,form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000)
    }

    static clearInput(){
        title.value = '';
        auther.value = '';
        isbn.value = '';
    }
}

class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        let books = Store.getBooks();
        books.push(book);

         localStorage.setItem('books', JSON.stringify(books))
    }

    static showBooks(){
        let books = Store.getBooks();
        books.forEach(book => {

        });

    }

    static removeBook(isbn){
        let books = Store.getBooks();

        books.forEach((book,index) => {
            if(isbn === book.isbn){
                books.splice(index,1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    } 
}
document.addEventListener('DOMContentLoaded' , () => {
Store.showBooks();
})

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(title.value === '' || auther.value === '' || isbn.value === ''){
       BookList.showMessage('please fill the following fields ...', 'error');
    } else {
        let book = new Book(title.value ,auther.value ,isbn.value);
        BookList.addBookToList(book);
        BookList.showMessage('Book Addded' , 'success');
        BookList.clearInput();
    };

})

// Even Deligation
book_list2.addEventListener('click', (e) => {
    BookList.deleteBookToList(e.target);
    BookList.showMessage('Book delete successfully' , 'success')
})




