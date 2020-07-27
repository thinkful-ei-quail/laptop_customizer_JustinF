import React from 'react';
import Feature from './features';


export default function CustomizeForm(props){
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {Object.keys(props.features).map((featureName, idx) => (
        <Feature 
          feature={props.features[featureName]}
          key={featureName}
          name={featureName}
          idx={idx}
          checked={props.selected[featureName].name}
          updateFeature={props.updateFeature}
        />
      
      ))}
    </form>
  )
}