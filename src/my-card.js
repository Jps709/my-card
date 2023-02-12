import { LitElement, html, css } from 'lit';

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    button {
      cursor: pointer;
      background-color: #4681f4;
      color: white;
      border-radius: 10px;
      padding: 6px;
      font-size: 25px;
      font-weight: bold;
      text-align: center;
      width: 14%;
    }

    .outline {
      justify-content: center;
      display: flex;
      min-height: 400px;
    }

    .lecard {
      text-align: center;
      border: solid grey 6px;
      max-width: 400px;
      border-radius: 20px;
      margin-bottom: 10px;
      font-size: 20px;
      background-color: white;
    }
    img {
      width: 350px;
    }

    @media screen and (min-width: 501px) and (max-width: 800px) {
    }
    @media screen and (max-width: 500px) {
      .lecard {
        font-size: 5vw;
      }
    }
    .buttons {
      margin: 16px auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    button:hover {
      background-color: red;
    }
    button:focus {
      background-color: red;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="buttons">
        <button class="copyCat">Copy</button>
        <button id="del">Delete</button>
        <button class="btnDet">Toggle Details</button>
        <button class="btnCT">Change Title</button>
        <button class="btnBG">Change Background Color</button>
      </div>
      <div class="outline">
        <div class="lecard">
          <h2>Some Nerd</h2>

          <img
            src="https://i.kym-cdn.com/news_feeds/icons/mobile/000/037/359/05b.jpg"
            alt="Obi-Wan headshot"
          />

          <p class="details">
            Hello there <br />
            Lightsaber go <i>brrrr</i>
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);
