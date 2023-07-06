document.addEventListener("DOMContentLoaded", function() {
    const itemId = window.location.pathname.split('/').pop(); // Extract the item ID from the URL path
  
    fetch(`https://credentials-server.onrender.com/items/${itemId}`)
      .then(response => response.json())
      .then(item => {
        const itemDetailsElement = document.getElementById('item-details');
        const itemElement = document.createElement('div');
        itemElement.classList.add('item-box');
  
        const imageElement = document.createElement('img');
        imageElement.src = item.imageLink;
        itemElement.appendChild(imageElement);
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = item.title;
        itemElement.appendChild(titleElement);
  
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;
        itemElement.appendChild(descriptionElement);
  
        itemDetailsElement.appendChild(itemElement);
      })
      .catch(error => {
        console.error('Failed to fetch item:', error);
      });
  });
  