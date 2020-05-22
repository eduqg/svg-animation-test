import React, { useState } from 'react';
import { getLogo } from '../helpers/svg'

let interval = null;

function Logo() {
  const logo = getLogo();
  const delay = 3000;
  const [isClosed, setIsClosed] = useState(false);

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    setIsClosed(!isClosed)
  }, delay);

  return (
    <div
      className={(isClosed) ? 'logo closed' : 'logo open'}>
      {logo}
    </div>
  );
}

export default Logo;