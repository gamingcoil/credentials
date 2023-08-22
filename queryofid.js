document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');

  fetch(`https://credentials-server.onrender.com/items/${itemId}`)
    .then(response => response.json())
    .then(item => {
      const serviceContent = document.getElementById('service-content');

      const imageElement = document.createElement('img');
      imageElement.src = item.imageLink;
      serviceContent.appendChild(imageElement);

      const itemDetailsElement = document.createElement('div');
      itemDetailsElement.classList.add('item-details');

      const titleElement = document.createElement('h2');
      titleElement.textContent = item.title;
      itemDetailsElement.appendChild(titleElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = item.description;
      const urlBtn = document.createElement('button');
      urlBtn.textContent = 'To Website'
      urlBtn.setAttribute('onclick', `window.location.href='${item.websiteUrl}';`);
      itemDetailsElement.appendChild(descriptionElement);
      itemDetailsElement.appendChild(urlBtn)

      serviceContent.appendChild(itemDetailsElement);

    })
    .catch(error => {
      console.error('Failed to fetch item:', error);
    });
});
