class ClubItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }

  set club(club) {
    this._club = club;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>   
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .fan-art-club {
          display: block;
          width: 40%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          margin: 25px auto 0;
        }
        
        .club-info {
          padding: 24px;
        }
        
        .club-info>h2 {
          font-weight: lighter;
        }
        
        .club-info>p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10;
          /* number of lines to show */
        }
      </style>
    
      <img class="fan-art-club" src="${this._club.strTeamBadge}" alt="Fan Art">
      <div class="club-info">
        <h2>${this._club.strTeam}</h2>
        <p>${this._club.strDescriptionEN}</p>
      </div>
    `;
  }
}

customElements.define("club-item", ClubItem);