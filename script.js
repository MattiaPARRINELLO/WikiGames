//get data.json
const elements = {
  start: document.querySelector("#start"),
  end: document.querySelector("#end"),
};
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    //get two random pages
    let randomPages = getRandomPages(data);
    let page1 = randomPages[0];
    let page2 = randomPages[1];
    //create html elements
    elements.start.innerHTML = `<a href="https://fr.wikipedia.org/wiki/${page1}">${page1}</a>`;
    elements.end.innerHTML = `<a href="https://fr.wikipedia.org/wiki/${page2}">${page2}</a>`;
  });

getRandomPages = (data) => {
  let page1 = data[Math.floor(Math.random() * data.length)];
  let page2 = data[Math.floor(Math.random() * data.length)];
  //check if pages are the same
  if (page1 == page2) {
    getRandomPages(data);
  } else {
    return [page1, page2];
  }
};
