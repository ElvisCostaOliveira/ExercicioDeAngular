// app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  filmesAcao = [
    { titulo: 'Batman', descricao: 'Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg' },
    { titulo: 'Vingadores', descricao: 'Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg' },
    { titulo: 'Gradiador', descricao: 'Nos dias finais do reinado de Marcus Aurelius (Richard Harris), o imperador desperta a ira de seu filho', imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/29/07/19873973.jpg' },
    { titulo: 'Logan', descricao: 'Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/10/05/19/59/363613.jpg' },
    { titulo: 'Bastados', descricao: 'Um pelotão de soldados de origem judaica', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/43/36/20096333.jpg' },
  ];

  filmesComedia = [
    { titulo: 'Forrest Gump', descricao: 'Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg' },
    { titulo: 'A Vida é Bela', descricao: 'Durante a Segunda Guerra Mundial na Itália, o judeu Guido (Roberto Benigni) e seu filho Giosué são levados para um campo de concentração nazista', imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/63/19962446.jpg' },
    { titulo: 'O Auto da Compadecida', descricao: 'As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens', imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/75/19962458.jpg' },
    { titulo: 'De Volta para o Futuro', descricao: 'Um jovem (Michael J. Fox) aciona acidentalmente uma máquina do tempo construída por um cientista (Christopher Lloyd) em um Delorean', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/62/20122008.jpg' },
    { titulo: 'Intocáveis', descricao: 'Um aristocrata fica tetraplégico após um grave acidente, contratando um assistente que não tem a menor experiência em cuidar de pessoas', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/89/00/20143859.jpg' },
  ];

  filmesFantasia = [
    { titulo: 'O Senhor dos Anéis', descricao: 'Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf (Ian McKellen) e Pippin (Billy Boyd) partam para o local na intenção de ajudar a resistência.', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/47/20224867.jpg' },
    { titulo: 'À Espera de um Milagre', descricao: '1935, no corredor da morte de uma prisão sulista. Paul Edgecomb (Tom Hanks) é o chefe de guarda da prisão, que temJohn Coffey (Michael Clarke Duncan) como um de seus prisioneiros. ', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/66/66/20156966.jpg' },
    { titulo: 'Viva - A Vida é uma Festa', descricao: 'Um menino de 12 anos, na tentativa de ser um músico famoso, enfrenta a desaprovação de sua família, acabando por se envolver em um mistério de 100 anos', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/11/33/0502209.jpg' },
    { titulo: 'Harry Potter', descricao: 'Em Harry Potter e as Relíquias da Morte - Parte 2, Harry Potter (Daniel Radcliffe) e seus amigos Rony Weasley (Rupert Grint) e Hermione Granger (Emma Watson) seguem à procura das horcruxes.', imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/91/95/19962896.jpg' },
    { titulo: 'Toy Story 3', descricao: 'Prestes a ir para a faculdade, Andy precisará decidir quais brinquedos irão para o lixo e quais irão para o sótão, acabando por causar uma grande confusão quando, por acidente, alguns brinquedos são colocados no lixo.', imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/89/64/19962659.jpg' },
  ];
  

}
