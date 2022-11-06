//Criar area dos icones e horários 
function creatGame(player1, hour, player2){
  return `
  <li>
    <img src="assets/icon-${player1}.svg" alt="Icone da bandeira do país">
    <strong>${hour}</strong>
    <img src="assets/icon-${player2}.svg" alt="Icone da bandeira do país">
  </li>

  `
}

let delay = -0.3; //setar valor do delay para a animação de surgimento dos cards

//Criar o card dos jogos
function creatCard(date, day, games){
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>

    <ul>
      ${games}
    </ul>
    </div> 
  `
}

//Mudar os icones e horários de forma dinâmica
document.querySelector('#cards').innerHTML =
    creatCard('20/11', 'domingo',
    creatGame('qatar','13:00','ecuador')
    ) +
    creatCard('21/11', 'segunda',
    creatGame('england','10:00','iran')  + creatGame('senegal','13:00','netherlands') + creatGame('united-states','16:00','wales')
    ) +
    creatCard('22/11', 'terça',
    creatGame('argentina','07:00','saudi-arabia') + creatGame('denmark','10:00','tunisia') + creatGame('mexico','13:00','poland') +creatGame('france','16:00','australia')
    ) +
    creatCard('23/11', 'quarta',
    creatGame('marocco','07:00','croatia') + creatGame('germany','10:00','japan') + creatGame('spain','13:00','costa-rica') +creatGame('belgium','16:00','canada')
    ) +
    creatCard('24/11', 'quinta',
    creatGame('switzerland','07:00','cameroon') + creatGame('uruguay','10:00','south-korea') + creatGame('portugal','13:00','ghana') +creatGame('brazil','16:00','serbia'))
