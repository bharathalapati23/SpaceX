import React from 'react'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function SummaryComponent(props) {

    const role = useSelector(state => state.role)

    let { mission } = props
    console.log(mission)
    return (

        <div style={{
            backgroundColor: 'red', height: '99%',
            width: '99%',
            // whiteSpace: 'nowrap',
            // overflow: 'hidden',
            // textOverflow: 'ellipsis'
        }}>
            {mission.mission_name}
            <br /> <br />
            <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={mission.description}
            />
            <br /> <br />
            {role == 'manager'
                ? <Link to={`mission/${mission.mission_id}`}>See More Details</Link>
                : <Link to={`/NoAccess`}>See More Details</Link>}
        </div>
    )
}

export default SummaryComponent;

