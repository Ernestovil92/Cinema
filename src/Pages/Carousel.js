import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>

      <Carousel.Item >
        <img style={{height: '500px', width: '1200px'}}
          className="d-block"
          src="https://images6.alphacoders.com/390/390190.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dark souls</h3>
          <p> Dark Souls tiene lugar en el reino ficticio de Lordran. Los jugadores toman el papel de un personaje humano no-muerto que ha sido elegido para realizar un peregrinaje para descubrir el destino de los no muertos..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '500px', width: '1200px'}}
          className="d-block"
          src="https://www.gamerfocus.co/wp-content/uploads/2014/06/lost-crowns-trilogy-dark-souls-II-dlc-trilogia-from-software-namco-bandai-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dark souls II</h3>
          <p>En un mundo de reyes caídos, en un mundo cada vez más en ruinas, un elegido, de nuevo, debe encontrar a un rey. A diferencia de sus hermanos, este título no trata de los poderes superiores que rigen el mundo</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img style={{height: '500px', width: '1200px'}}
          className="d-block"
          src="https://locosxlosjuegos.com/wp-content/uploads/2015/06/img_slider_darksouls3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dark Souls III</h3>
          <p>
          Dark Souls 3 es el final de la saga y presenta un mundo, el Reino de Lothric, al borde del Apocalipsis por culpa de "la maldición de los no muertos", y la razón por la que el mundo aún no se ha sumido en la oscuridad totalmente es el sacrificio que muchos héroes e incluso dioses hicieron al reavivar la llama original.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
