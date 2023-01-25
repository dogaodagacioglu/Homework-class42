//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable
function createBookList(books) {
  const title = document.createElement('p');
  const img = document.createElement('img');
  const bookList = document.createElement('ul');
  for (const book of books) {
    const bookElement = document.createElement('li');
    // //bookElement.classLi = book.alreadyRead ? 'green' : 'red';
    // book.alreadyRead
    //   ? bookElement.classLi.add('green')
    //   : bookElement.classLi.add('red');
    title.textContent = `${book.title} - ${book.author};`;
    img.src = `./asserts/${book.title.split(' ').join('_')}.jpg`;
    img.alt = book.title;
    bookElement.appendChild(title);
    bookElement.appendChild(img);
    bookList.appendChild(bookElement);
  }
  return bookList;
}

// function createBookList(books) {
//   let ulTag = document.createElement('ul');

//   books.forEach(book =>{
//     let liTag = document.createElement('li');
//     liTag.textContent = `${book.title}, ${book.author}`;
//     ulTag.appendChild(liTag);

//     let imgTag = document.createElement('img');
//     imgTag.src = book.cover;
//     imgTag.alt = `${book.title}`;
//     liTag.appendChild(imgTag);

//     if(book.alreadyRead){
//       liTag.style.backgroundColor = 'green';
//     }else{
//       liTag.style.backgroundColor = 'red';
//     }
//   })
//   return ulTag
// }


function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      cover: './assets/the_design_of_everyday_things.jpg'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      cover: './assets/the_most_human_human.jpg'
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      cover: './assets/the_pragmatic_programmer.jpg'
    },
  ];

  const ulElement = createBookList(myBooks);
  console.log(ulElement);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
