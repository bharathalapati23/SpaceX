import React from 'react';

function NoAccess(props) {

  const goBack = () => {
    props.history.push('/mission');
  }
  return (
    <div>
      You are unauthorized to view this page
      <br/><br/>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default NoAccess;