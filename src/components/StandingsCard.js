import React from 'react'

const StandingsCard = ({ team, position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points }) => {
  return (
    <div key={team.id} className="column is-multiline">
      <table className="table">
        <tbody>
          <tr className="row-hover">
            <th>{position}</th>
            <td className="team-data">{<img src={team.crestUrl} alt={team.name} className="image is-64x64"
              onError={(e)=>{
                e.target.onerror = null; e.target.src='../images/default-crest.png'
              }} />}
            <strong>{team.name}</strong></td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{draw}</td>
            <td>{lost}</td>
            <td>{goalsFor}</td>
            <td>{goalsAgainst}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StandingsCard
