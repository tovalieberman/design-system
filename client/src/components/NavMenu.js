import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
<div style={{width: '100%'}}>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <span style={{fontSize: 25, fontWeight: 'bold', paddingLeft: 15, paddingTop: 15}}>Design System</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fas fa-bars text-hudson-navy"></span>
      </button>
    </div>
  </nav>

  <nav className="sub-nav-lg bg-hugo-blue-shade"  >
    <div className="nav container-fluid align-items-center" id="nav-tab" role="tablist">
      <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
        aria-controls="nav-hero" aria-selected="true" to="/test">Placeholder link</Link>
      <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
        aria-controls="nav-hero" aria-selected="true" to="/components/">Components</Link>
    </div>
  </nav>
</div>
);
