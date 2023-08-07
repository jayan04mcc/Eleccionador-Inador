import { Component } from 'react';

class Votacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votos: {
        candidato_1: 0,
        candidato_2: 0,
        candidato_3: 0,
      },
      votanteHaVotado: false,
    };
  }

  incrementarVoto = (candidato) => {
    const { votanteHaVotado } = this.state;

    if (!votanteHaVotado) {
      this.setState((prevState) => ({
        votos: {
          ...prevState.votos,
          [candidato]: prevState.votos[candidato] + 1,
        },
        votanteHaVotado: true,
      }));
    }
  };

  render() {
    const { votos, votanteHaVotado } = this.state;

    return (
      <div>
        <h1>Votación</h1>
        <p>Candidato 1: {votos.candidato_1}</p>
        <button onClick={() => this.incrementarVoto('candidato_1')} disabled={votanteHaVotado}>
          Votar Candidato 1
        </button>

        <p>Candidato 2: {votos.candidato_2}</p>
        <button onClick={() => this.incrementarVoto('candidato_2')} disabled={votanteHaVotado}>
          Votar Candidato 2
        </button>

        <p>Candidato 3: {votos.candidato_3}</p>
        <button onClick={() => this.incrementarVoto('candidato_3')} disabled={votanteHaVotado}>
          Votar Candidato 3
        </button>
      </div>
    );
  }
}

export default Votacion;
