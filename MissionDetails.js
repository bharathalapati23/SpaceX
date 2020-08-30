import React from 'react';
import {Link} from 'react-router-dom'

function MissionDetails({ props,match }) {

    const [mission, setMission] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/missions/${match.params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setMission(result)
                    setLoading(false)

                },
                (error) => {
                    console.log('error')
                }
            )
    }, [])

    return (
        
        <div>
            {loading ? 'loading...' :
                <div>
                    Mission Details
            <br /><br />
                    {mission.mission_name}
                    <br /><br />
                    {mission.description}
                    <br /><br />
                    <a href={mission.wikipedia}>Wiki Link</a>
                    <br /><br />
                    <a href={mission.website}>Website</a>
                </div>
            }
            <br/><br/>
            <Link to={`/mission`}>Go Back</Link>
        </div>
    );
}

export default MissionDetails;