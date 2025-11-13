function openTab(event, tabName) {
   event.preventDefault(); // previne o comportamento padrão (ex: se for um link <a>)
   event.stopPropagation(); // impede que o evento suba na hierarquia do DOM

   // Esconde todo o conteúdo das abas
   const tabContents = document.querySelectorAll('.tab-content');
   console.log(tabContents);
   tabContents.forEach(tab => tab.classList.remove('active'));

   // Remove a classe 'active' de todos os botões
   const tabButtons = document.querySelectorAll('.tab-button');
   console.log(tabButtons);
   tabButtons.forEach(button => button.classList.remove('active'));

   // Mostra o conteúdo da aba selecionada
   document.getElementById(tabName).classList.add('active');
   console.log(document.getElementById(tabName).classList.add('active'));
   
   // Adiciona a classe 'active' ao botão clicado
   console.log(event.currentTarget);
   event.currentTarget.classList.add('active');
}


