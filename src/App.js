
import './App.css';
import Card from './Card';
import Data from './Data ';
function App() {

  return (
    <>
    <h1 className="h1"> Props Values with card</h1>
    <div class="container">
  <div class="row">
    <div class="col-md-4">
      

      <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        sname={Data[0].sname}
        link={Data[0].link}
      />

<Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        sname={Data[1].sname}
        link={Data[1].link}
      />

<Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        sname={Data[2].sname}
        link={Data[2].link}
      />

</div>

   <div class="col-md-4">
    

      <Card
        imgsrc={Data[5].imgsrc}
        title={Data[5].title}
        sname={Data[5].sname}
        link={Data[5].link}
      />

<Card
        imgsrc={Data[6].imgsrc}
        title={Data[6].title}
        sname={Data[6].sname}
        link={Data[6].link}
      />
      <Card
        imgsrc={Data[7].imgsrc}
        title={Data[7].title}
        sname={Data[7].sname}
        link={Data[7].link}
      />

</div>
<div class="col-md-4">
      

      <Card
        imgsrc={Data[8].imgsrc}
        title={Data[8].title}
        sname={Data[8].sname}
        link={Data[8].link}
      />

<Card
        imgsrc={Data[9].imgsrc}
        title={Data[9].title}
        sname={Data[9].sname}
        link={Data[9].link}
      />
      <Card
        imgsrc={Data[10].imgsrc}
        title={Data[10].title}
        sname={Data[10].sname}
        link={Data[10].link}
      />

</div>



</div>
</div>
    </>
  );
}



export default App;
