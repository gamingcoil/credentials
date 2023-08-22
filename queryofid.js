document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');

  fetch(`https://credentials-server.onrender.com/items/${itemId}`)
    .then(response => response.json())
    .then(item => {
      const itemListElement = document.getElementById('item-list');
      const itemElement = document.createElement('div');
      itemElement.classList.add('service-content');

      const imageElement = document.createElement('img');
      imageElement.src = item.imageLink;
      itemElement.appendChild(imageElement);

      const itemDetailsElement = document.createElement('div');
      itemDetailsElement.classList.add('item-details');

      const titleElement = document.createElement('h2');
      titleElement.textContent = item.title;
      itemDetailsElement.appendChild(titleElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = item.description;
      itemDetailsElement.appendChild(descriptionElement);

      itemElement.appendChild(itemDetailsElement);

      itemListElement.appendChild(itemElement);
    })
    .catch(error => {
      console.error('Failed to fetch item:', error);
    });
});
