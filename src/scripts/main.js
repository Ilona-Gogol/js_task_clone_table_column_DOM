'use strict';

const trs = document.querySelectorAll('tr');

trs.forEach((el) => {
  const parentElement = el;
  const firstChild = parentElement.children[1];
  const clonedChild = firstChild.cloneNode(true);

  parentElement.insertBefore(clonedChild, parentElement.children[4]);
});
