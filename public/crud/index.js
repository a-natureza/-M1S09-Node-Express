document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM completamente carregado e analisado');
    
    // Exemplo de manipulação de evento
    const button = document.getElementById('myButton');
    if (button) {
      button.addEventListener('click', () => {
        alert('Botão clicado!');
      });
    }
  });

  