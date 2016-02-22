import React from 'react';

import FullName from './full-name';
import MothersMaidenName from './mothers-maiden-name';

class PersonalInformationPanel extends React.Component {
  constructor() {
    super();
    this.onStateChange = this.onStateChange.bind(this);
  }

  onStateChange(subfield, update) {
    this.props.publishStateChange(['personalInformation', subfield], update);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-12 columns">
            <h3>Name and General Information</h3>
          </div>
        </div>
        <fieldset className="usa-fieldset-inputs usa-sans">
          <div className="row">
            <div className="small-12 columns">
              <h4>Veteran's Name</h4>
              <FullName name={this.props.applicationData.personalInformation.fullName}
                onUserInput={(update) => {this.onStateChange('fullName', update);}} />
              <MothersMaidenName name={this.props.applicationData.personalInformation.mothersMaidenName}
                onUserInput={(update) => {this.onStateChange('mothersMaidenName', update);}} />
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default PersonalInformationPanel;
