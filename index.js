const book = [
  {
    title: 'The Bluest Eye',
    authors: ['Toni Morrison'],
    page_number: '350',
    year: '1970',
    borrowable: 'yes',
    availability: 'yes'
  },
  {
    title: 'My Brilliant Friend',
    authors: ['Elena Ferrante'],
    page_number: '450',
    year: '2011',
    borrowable: 'yes',
    availability: 'yes'
  },
  {
    title: 'Hotel World',
    authors: ['Ali Smith'],
    page_number: '280',
    year: '2014',
    borrowable: 'no',
    availability: 'yes'
  },
]


const update = () => {
  const bookListElm = document.querySelector('.books tbody');
  bookListElm.innerHTML = '';

  for (const item of book) {
    const bookElm = document.createElement("tr");
    bookElm.className = "group";

    bookElm.innerHTML = `
                      <td class=title>${item.title}</td>
                      <td class=authors>${item.authors}</td>
                      <td class=page_number>${item.page_number}</td>
                      <td class=year>${item.year}</td>
                      <td class=borrowable>${item.borrowable}</td>
                      <td class=availability>${item.availability}</td>
                      <button class="butt_borrow">Borrow</button>
                  `;

    const buttBorrow = bookElm.querySelector(".butt_borrow");
    const availableElem = bookElm.querySelector(".availability");

    buttBorrow.addEventListener("click", () => {
      // item.availability = item.availability == "yes"?"no":"yes";
      if (item.availability == "yes") {
        item.availability = "no";
      } else {
        item.availability = "yes"; // this returns the value back to yes when it is clicked again!!!
      }
      // first possibility
      availableElem.innerHTML = item.availability;
      // second
      // update(); --> this one is not super ideal because it will refresh and reload the whole page from scratch every time the button is clicked
    });

    bookListElm.appendChild(bookElm); /// because we are using DOM elements so we have to join the one i made with the one in the HTML
  }
}

update();

const button = document.querySelector('.button');
const authorsElm = document.querySelector('.butt__authors');
const titleElm = document.querySelector('.butt__title');
const pageElm = document.querySelector('.butt__page_number');
const yearElm = document.querySelector('.butt__year');
const borrowElm = document.querySelector('.butt__borrowable');
const availElm = document.querySelector('.butt__availability');

button.addEventListener('click', () => {
  book.push({
    title: titleElm.value,
    authors: authorsElm.value,
    page_number: Number(pageElm.value),
    year: Number(yearElm.value),
    borrowable: borrowElm.value,
    availability: availElm.value,
  })
  update();
});


