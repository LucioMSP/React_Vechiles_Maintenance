import React from 'react';
import AdminAutomovil from './components/AdminAutomovil'

function App() {
  return (
   <div className="App container">
     <br></br>
     <div className="card border-primary mb-3">
       <div className="card-header">
        <h5 style={{textAlign:'center'}}>MANTENIMIENTO DE AUTOMÓVILES - REACTJS</h5>
       </div>
       <div className="card-body">
         <h5 className="card-title">Agregar Automovil:</h5>
         <AdminAutomovil/>
       </div>
     </div>
   </div>
  );
}

export default App;
