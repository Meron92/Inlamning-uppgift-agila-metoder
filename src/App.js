import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import ChosenInfoPage from './Components/ChosenInfoPage';
import { ContextProvider } from './Components/Context';
import Roller from './Components/Roller';

function App() {
  // const [infos, setInfos] = useState([
  //   {
  //     id: 1,
  //     titel: "Om Scrum",
  //     desc: " Scrum är ett ramverk för att utveckla, tillhandahålla och underhålla komplexa produkter. fördelen med scrum är fokuseringen på affärsnytta och möjligheten att förändra projektet på ett strukturerat sätt."
  //   },
  //   {
  //     id: 2,
  //     titel: "Rollerna"
  //   },
  //   {
  //     id: 3,
  //     titel: "Project owner",
  //     desc: "En project owner representerar kund om inte det är en faktiskt kund.En project owner är  bla. ansvarig för att maximera värdet på produkten som kommer från Scrum-teamets arbete."
  //   },
  //   {
  //     id: 4,
  //     titel: "Scrum master",
  //     desc: "Scrum Master är ansvarig för Scrum-teamets effektivitet. Scrum Mastern gör detta genom att göra det möjligt för Scrum-teamet att förbättra sina metoder, inom Scrum-ramverket."
  //   },
  //   {
  //     id:5,
  //     titel: "Team",
  //     desc: "Ett scrum-team är en grupp samarbetspartners, vanligtvis mellan 3 och 6 individer, som arbetar för att slutföra projekt och leverera produkter."
  //   },
  //   {
  //     id:6,
  //     titel: "Backlog",
  //     desc: "En Scrum Product Backlog helt enkelt en lista över alla saker som behöver göras inom projektet. Där alla tickets och userstorys är samlade som man sedan tar från till sin sprint. "
  //   },
  //   {
  //     id: 7,
  //     titel: "Sprint",
  //     desc: "En sprint där du samlar saker du ska göra för dagen eller kanske veckan som du tagit från din produkt backlog. När man sedan är klar med en sprint kan man påbörja nästa sprint."
  //   },
  //   {
  //     id: 8,
  //     titel: "Sprintplanning",
  //     desc: "Sprintplanning är när du väljer ut och planerar dina tickets som man tagit ut från sin backlog. "
  //   },
  //   {
  //     id:9,
  //     titel: "Sprint artefacts",
  //     desc: "Sprint Artifacts tillhandahåller nyckelinformation som Scrum-teamet och intressenterna behöver vara medvetna om för att förstå produkten under utveckling."
  //   },
  //   {
  //     id: 10,
  //     titel: "Sprint review",
  //     desc: "Syftet med Sprint Review är att inspektera resultatet av Sprinten och fastställa framtida anpassningar. Scrum-teamet presenterar resultatet av sitt arbete för nyckelintressenter och framsteg mot produktmålet diskuteras."
  //   },
  //   {
  //     id: 11,
  //     titel: "Sprint retrospective",
  //     desc: "Sprint retrospective är ett kort möte som hålls efter Sprint review i slutet av varje sprint. Under Sprint retrospective identifierar teamet själv delar av processen som fungerade eller inte fungerade under sprinten, tillsammans med potentiella lösningar. Det syftar till att ständigt förbättra processerna."
  //   },
  //   {
  //     id:12,
  //     titel: "Agil estimering",
  //     desc: "Agil estimering är en process som hjälper till med att förutspå ett projekts kostnad,tidsåtgång eller storlek."
  //   }
  // ])

  // function infoChosed (id) {
  //   let infoList = [... infos]
  //   let choseninfo = infoList.find((info)=> info.id === id)
  //   choseninfo.chosed = !choseninfo.chosed
  //   let currentInfo = infoList.findIndex((info) => info.id === id)
  //   infoList.splice(currentInfo, 1, choseninfo)
  //   setInfos(infoList)
  // }

 
  return (
<Router>
    <div className="App">
    {/* {
      infos.map((info) => (
        <Roller info={info} titel={info.titel} desc={info.desc} key={info.id} />
      // <section info={info} key={info.id} className="wrapper">
      //   <h1>{info.titel}</h1>
      //   <Link to="Roller"><button>Mer info</button></Link>
      // </section>
      ))
    } */}
  <Link to="/Roller"><button>Mer info</button></Link>
  <ContextProvider>
      <Routes>
        <Route path="/Roller" element={<Roller />}></Route>
        <Route path='/ChosenInfoPage' element={<ChosenInfoPage />} />
      </Routes>
      </ContextProvider>
    </div>
    </Router>
  );
}

export default App;
