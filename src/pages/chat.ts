type Message = {
  from: string;
  message: string;
};

class ChatPage extends HTMLElement {
  connectedCallBack() {
    this.render();
    const form = this.querySelector(".form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const target = e.target as any;
      console.log(target["new-message"].value);
    });
  }

  messages: Message[] = [];

  render() {
    console.log("render");

    this.innerHTML = `
    <div>
      <div class="messages">
        ${this.messages.map((m) => {
          return `<div class="message">${m.from}:${m.message}</div>`;
        })}
      </div>
      <form class="submit-message">
          <input> type="text" name="new-message">
          <button>Enviar</button>
      </form>                
    </div>
          `;
  }
}
customElements.define("x-chat-page", ChatPage);
