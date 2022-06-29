import Date from "./components/date";
import Weather from "./components/weather";
import Moon from "./components/moonPhase";
import PrayTime from "./components/prayTime";
import SunPhase from "./components/sunPhase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="grid grid-cols-1 gap-56 content-between">
    <div className="md:flex md:justify-between p-10">
      <div>
        <Date />
      </div>
      <div>
        <Weather />
      </div>
    </div>
    <div className="md:flex md:justify-between p-10 ">
      <div>
        <Moon  />
      </div>
      <div>
        <PrayTime />
      </div>
      <div>
        <SunPhase />
      </div>
    </div>
</div>
    //  <div >

    //   <div className='flex justify-between' >
    //   <div >
    //     <Date  />
    //   </div>
    //   <div>
    //     <Weather />
    //   </div>
    //   </div>
    //   {/* <div className="prayytime">
    //   <PrayTime/>
    //   </div> */}

    //   <div className='SunPhasee'>
    //     <SunPhase />
    //   </div>
    //   <div>
    //     <Moon />
    //   </div>

    //  </div>
    // <Container>
    //     {/* Stack the columns on mobile by making one full-width and the other half-width */}
    //     <Row>
    //       <Col xs={12} md={8}>
    //         <Date />
    //       </Col>
    //       <Col xs={6} md={4}>
    //        <Weather />
    //       </Col>
    //     </Row>

    //     <Row>
    //       <Col xs={6} md={4}>

    //       </Col>
    //       <Col xs={6} md={4}>
    //            <PrayTime />
    //       </Col>
    //       <Col xs={6} md={4}>

    //       </Col>
    //     </Row>

    //     <Row>
    //       <Col xs={6}><Moon /></Col>
    //       <Col xs={6}><SunPhase /></Col>
    //     </Row>
    //   </Container>
  );
}

export default App;
