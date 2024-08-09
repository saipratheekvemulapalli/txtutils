import React, { useState } from 'react';

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });
  const [btntransform, setbtntransform] = useState({
    color: 'white',
    backgroundColor: 'black',
  });
  const [buttontxt, setbuttontxt] = useState('Enable dark mode');

  function changethemetoggle() {
    if (mystyle.backgroundColor === 'black') {
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setbtntransform({
        color: 'black',
        backgroundColor: 'white',
      });
      setbuttontxt('Enable dark mode');
    } else {
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setbtntransform({
        color: 'white',
        backgroundColor: 'black',
      });
      setbuttontxt('Enable white mode');
    }
  }

  return (
    <div>
      <div className="container mx-4">
        <h2>About us</h2>
      </div>
      <div className="container my-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  ...mystyle,
                  outline: 'none',
                  boxShadow: 'none', // Removes the default box-shadow on focus
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  ...mystyle,
                  outline: 'none',
                  boxShadow: 'none',
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  ...mystyle,
                  outline: 'none',
                  boxShadow: 'none',
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <button type="button" onClick={changethemetoggle} className="btn btn-secondary mx-2" style={btntransform}>
          {buttontxt}
        </button>
      </div>
    </div>
  );
}
