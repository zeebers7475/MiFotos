import './App.css';
import Images from './server/Storage';


const I1 = 'import Image3 from "F:/Pictures/Phone Wallpaper/wallhaven-431614.jpg'
I1

function App() {
  return (
    <>
      <h1>Mi Fotos</h1>
      {console.log(Images)}
      {Images.map((image) => { return <img src={image} width='300px'/>})}
      {I1}
    </>
  );
}

export default App;
