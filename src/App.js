import CharacterCard from './CharacterCard';
class App extends Component {
  render() {
   return (
    <div>
     <CharacterCard value="h"/>
     <CharacterCard value="i"/>
    </div>
   );
  }
}
const word = "Hello";
class App extends Component {
   render() {
    return (
     <div>
      {
        Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
      }
     </div>
    );
  }
}