document.addEventListener("DOMContentLoaded", function() {
  fetch('https://credentials-server.onrender.com/items')
    .then(response => response.json())
    .then(items => {
      const itemListElement = document.getElementById('item-list');
      items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item-box');

        itemElement.addEventListener('click', function() {
          navigateToNewPage(item.id); // Pass the item ID to the navigateToNewPage function when the item box is clicked
        });

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
      });
    })
    .catch(error => {
      console.error('Failed to fetch items:', error);
    });
});

function navigateToNewPage(itemId) {
  window.location.href = `/service/${itemId}`; // Use template literals to construct the URL with the item ID
}
