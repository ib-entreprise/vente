
 const buttonOpenFiltre = document.getElementById('buttonOpenFiltre');
 const buttonCloseFiltre = document.getElementById('buttonCloseFiltre');
 const contentFiltre = document.getElementById('contentFiltre');
 
 buttonOpenFiltre.addEventListener('click', function(){
    contentFiltre.style.display = 'block';
    buttonOpenFiltre.style.display = 'none';
    buttonCloseFiltre.style.display = 'block';
 });


 buttonCloseFiltre.addEventListener('click', function(){
    contentFiltre.style.display = 'none';
    buttonCloseFiltre.style.display = 'none';
    buttonOpenFiltre.style.display = 'block';
 });

function openModal() {
    document.getElementById('myModal').classList.remove('hidden');
}

// Fonction pour fermer le modal
function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}

// Événement pour ouvrir le modal lorsqu'on clique sur le bouton
document.getElementById('openModalButton').addEventListener('click', openModal);

// Événement pour fermer le modal lorsqu'on clique sur le bouton de fermeture
document.getElementById('closeModalButton').addEventListener('click', closeModal);
  // Fonction pour activer un onglet
  function activateTab(tabId) {
    // Désactiver tous les onglets
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Masquer tous les contenus d'onglets
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Activer l'onglet spécifié
    const tabButton = document.getElementById(tabId);
    tabButton.classList.add('active');

    const tabContent = document.getElementById(`content${tabId.slice(-1)}`);
    tabContent.style.display = 'block';
}

// Événements pour activer les onglets
document.getElementById('tab1').addEventListener('click', () => activateTab('tab1'));
document.getElementById('tab2').addEventListener('click', () => activateTab('tab2'));
document.getElementById('tab3').addEventListener('click', () => activateTab('tab3'));

// Activer l'onglet 1 par défaut
activateTab('tab1');