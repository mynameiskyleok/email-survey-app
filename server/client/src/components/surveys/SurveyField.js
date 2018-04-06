// SurveyField contains logit to render a single
// label and text input
import React from 'react';

// meta is a redux form property. this uses es6 nested destructuring
// to grab error and touched off the meta object
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      {/* i.e. if touched and there is an error, show the error: */}
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
