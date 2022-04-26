import React, { createContext, useState, useEffect} from "react";

export const userContext= createContext()
export const ContextProvider = props => {
    
    const [infos, setInfos] = useState([
        {
          id: 1,
          titel: "Om Scrum",
          desc: " Scrum är ett ramverk för att utveckla, tillhandahålla och underhålla komplexa produkter. fördelen med scrum är fokuseringen på affärsnytta och möjligheten att förändra projektet på ett strukturerat sätt."
        },
        {
          id: 2,
          titel: "Rollerna"
        },
        {
          id: 3,
          titel: "Project owner",
          desc: "En project owner representerar kund om inte det är en faktiskt kund.En project owner är  bla. ansvarig för att maximera värdet på produkten som kommer från Scrum-teamets arbete."
        },
        {
          id: 4,
          titel: "Scrum master",
          desc: "Scrum Master är ansvarig för Scrum-teamets effektivitet. Scrum Mastern gör detta genom att göra det möjligt för Scrum-teamet att förbättra sina metoder, inom Scrum-ramverket."
        },
        {
          id:5,
          titel: "Team",
          desc: "Ett scrum-team är en grupp samarbetspartners, vanligtvis mellan 3 och 6 individer, som arbetar för att slutföra projekt och leverera produkter."
        },
        {
          id:6,
          titel: "Backlog",
          desc: "En Scrum Product Backlog helt enkelt en lista över alla saker som behöver göras inom projektet. Där alla tickets och userstorys är samlade som man sedan tar från till sin sprint. "
        },
        {
          id: 7,
          titel: "Sprint",
          desc: "En sprint där du samlar saker du ska göra för dagen eller kanske veckan som du tagit från din produkt backlog. När man sedan är klar med en sprint kan man påbörja nästa sprint."
        },
        {
          id: 8,
          titel: "Sprintplanning",
          desc: "Sprintplanning är när du väljer ut och planerar dina tickets som man tagit ut från sin backlog. "
        },
        {
          id:9,
          titel: "Sprint artefacts",
          desc: "Sprint Artifacts tillhandahåller nyckelinformation som Scrum-teamet och intressenterna behöver vara medvetna om för att förstå produkten under utveckling."
        },
        {
          id: 10,
          titel: "Sprint review",
          desc: "Syftet med Sprint Review är att inspektera resultatet av Sprinten och fastställa framtida anpassningar. Scrum-teamet presenterar resultatet av sitt arbete för nyckelintressenter och framsteg mot produktmålet diskuteras."
        },
        {
          id: 11,
          titel: "Sprint retrospective",
          desc: "Sprint retrospective är ett kort möte som hålls efter Sprint review i slutet av varje sprint. Under Sprint retrospective identifierar teamet själv delar av processen som fungerade eller inte fungerade under sprinten, tillsammans med potentiella lösningar. Det syftar till att ständigt förbättra processerna."
        },
        {
          id:12,
          titel: "Agil estimering",
          desc: "Agil estimering är en process som hjälper till med att förutspå ett projekts kostnad,tidsåtgång eller storlek."
        }
      ])

      useEffect(() => {
          setInfos(infos)
      },[infos])

      return (
          <section>
              <userContext.Provider value={{infos, setInfos}}>
                  {props.children}
              </userContext.Provider>
          </section>
      )


}