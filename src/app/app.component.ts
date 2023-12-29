import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
})
export class AppComponent {
  currentCard: HTMLElement | null = null;
  displayElement: HTMLElement | null = null;
  messages: string[] = ['Message 1', 'Message 2', 'Message 3'];

  toggleCard() {
    const buttonContainer = document.getElementById('buttonContainer');
    const cardContainer = document.getElementById('cardContainer');
  
    if (this.currentCard) {
      this.hideCard(this.currentCard);
    } else {
      this.createCard(buttonContainer, cardContainer);
    }
  }
  
  createCard(buttonContainer: HTMLElement | null, cardContainer: HTMLElement | null) {
    if (!buttonContainer || !cardContainer) {
      return;
    }
  
    this.messages.forEach((messageText) => {
      const button = document.createElement('button');
      button.textContent = messageText;
      button.addEventListener('click', () => this.showMessageClicked(messageText));
      button.classList.add('bts');

      buttonContainer.appendChild(button);
    });
  
    this.currentCard = document.createElement('div');
    this.currentCard.classList.add('card');
    cardContainer.appendChild(this.currentCard);
  }
  
  hideCard(card: HTMLElement | null) {
    const buttonContainer = document.getElementById('buttonContainer');
    const cardContainer = document.getElementById('cardContainer');
  
    if (buttonContainer && cardContainer && card) {
      cardContainer.removeChild(card);
      buttonContainer.innerHTML = '';
      this.currentCard = null;
      this.displayElement = null;
    }
  }
  

  showMessageClicked(message: string) {
    const buttonContainer = document.getElementById('buttonContainer');
    const cardContainer = document.getElementById('cardContainer');
  
    if (buttonContainer && cardContainer) {
      buttonContainer.innerHTML = '';
  

      if (this.currentCard) {
        cardContainer.removeChild(this.currentCard);
      }

      this.currentCard = document.createElement('div');
      this.currentCard.classList.add('card');
      cardContainer.appendChild(this.currentCard);
  
     
      this.displayElement = document.createElement('p');
      this.displayElement.textContent = `${message} is clicked`;
      this.currentCard.appendChild(this.displayElement);
    }
  }
  

  
}
