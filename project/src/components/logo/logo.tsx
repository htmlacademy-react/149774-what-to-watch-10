import {Link} from 'react-router-dom';

type LogoProps = {
  linkClass: string;
}

function Logo({linkClass} : LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link to="/" className={linkClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
