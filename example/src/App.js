import React, { useCallback } from 'react';

import { ApplePayButton } from "react-apple-pay-button";

function App() {
  const onRequestApplePay = useCallback(
    () => /* TODO */
    [],
  );
  return (
     <ApplePayButton
       onClick={onRequestApplePay}
       theme="light"
     >
       {"Your String/FormattedText here!"}
     </ApplePayButton>
  );
}

export default App;
