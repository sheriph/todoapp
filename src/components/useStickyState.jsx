import React from "react";


function UseStickyState(defaultValue, storageName) {

  const [state, setState] = React.useState(() => {
    let stickyValue = window.localStorage.storageName;
    return stickyValue === undefined ? [] : JSON.parse(stickyValue);
  });

  React.useEffect(() => window.localStorage.setItem("storageName",JSON.stringify(state)))
 

    return [state, setState];
  }

  export default UseStickyState;