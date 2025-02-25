import React from 'react'

export default function Navbar(props) {
  return (
  <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">{props.address}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Action</a></li>
              <li><a class="dropdown-item" href="/">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
    <div className={`form-check form-switch text-${props.mode === `light`?`dark`:`light`}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
    <label className="form-check-label" htmlForf="flexSwitchCheckDefault">{props.mode === `light`?`Enable Dark Mode`:`Enable light Mode`}</label>
</div>
  </nav>
  );
}