import React, { useEffect } from 'react';

const MicroFrontendLoader = ({ history, name, host }) => {
  const renderMicroFrontend = () => {
    window[`render${name}`](`${name}-container`, history);
    // E.g.: window.renderBrowse('browse-container', history);
  };

  useEffect(() => {
    const scriptId = `micro-script-${name}`;

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `${host}${manifest['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`](`${name}-container`);
    }
  }, []);

  return (
    <main id={`${name}-container`} />
  );
}

export default MicroFrontendLoader;
