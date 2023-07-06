document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
  
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
  