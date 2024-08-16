// Obtiene el ID del post a partir de los parámetros de la URL
const postId = getPostId();

// Realiza una solicitud para obtener el archivo 'post.json'
fetch('post.json')
  .then(response => response.json()) // Convierte la respuesta en un objeto JSON
  .then(data => {
    // Obtiene los datos del post correspondiente al ID obtenido de la URL
    const post = data[postId];
    
    // Rellena los elementos HTML con los datos del post
    document.getElementById('titulo').textContent = post.title; // Establece el título del post
    document.getElementById('autor').textContent = `por ${post.author}`; // Establece el autor del post
    document.getElementById('texto').innerHTML = post.texto; // Establece el contenido del post

    // Cambia la imagen de fondo de la portada si es necesario
    const cover = document.querySelector('.cover-v1');
    cover.style.backgroundImage = `url(${post.image})`; // Establece la imagen de fondo de la portada
  })
  .catch(error => {
    // Maneja cualquier error que ocurra al intentar cargar el contenido del post
    console.error('Error al cargar el contenido del post:', error);
  });

// Función que obtiene el parámetro 'id' de la URL
function getPostId() {
  const urlParams = new URLSearchParams(window.location.search); // Crea un objeto para manejar los parámetros de la URL
  return urlParams.get('id'); // Retorna el valor del parámetro 'id' de la URL
}
