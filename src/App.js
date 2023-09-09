//Hooks
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Esto es un componente
//JSX
const ApiComponent = () => {
  const [autos, setAutos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);


  useEffect(() => {
    async function CargarAutos() {
      try {
        const resp = await fetch('https://api-cars-jb0r.onrender.com/autos');
        const data = await resp.json();
        setAutos(data.results);
        setisLoaded(true);

      } catch (error) {
        setisLoaded(true);
        setError(error);
      }
    }
    CargarAutos();


  }, []);
  if (error) {
    return <><h2>{error.message}</h2></>
  } else if (!isLoaded) {
    return <><h1>Estamos Preparndo todo</h1></>
  } else {
    return (
      <div className="container">
        <div className="row">
          {autos.map((item) => (
            <div className="col-md-4" key={item.auto}>
              <Card style={{ width: '18erm' }}>
                <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Text>{item.precio}</Card.Text>
                  <Button variant="primary">Ver Detalle</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ApiComponent;
