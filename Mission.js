import React from 'react';
import GridList from '@material-ui/core/GridList';
import SummaryComponent from './SummaryComponent'
import GridListTile from '@material-ui/core/GridListTile';

function Mission(props) {

    const [missions, setMissions] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.spacexdata.com/v3/missions")
            .then(res => res.json())
            .then(
                (result) => {
                    setMissions(result)
                },
                (error) => {
                    console.log('error')
                }
            )
    }, [])

    return (
        <div>
            Missions<br /><br />
            <GridList cellHeight={160} cols={3}>
                {missions.map((mission) => (
                    <GridListTile cols={1} cellHeight={160}>
                        <SummaryComponent mission={mission} key={mission.mission_id}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default Mission;