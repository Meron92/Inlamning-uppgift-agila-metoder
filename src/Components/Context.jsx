import React, { createContext, useState, useEffect} from "react";

export const userContext= createContext()
export const ContextProvider = props => {
    
    const [infos, setInfos] = useState([
        {
          id: 1,
          titel: "Om Scrum",
          img: "https://image.shutterstock.com/image-vector/scrum-process-infographics-600w-690204889.jpg",
          desc: " Scrum är ett ramverk för att utveckla, tillhandahålla och underhålla komplexa produkter. fördelen med scrum är fokuseringen på affärsnytta och möjligheten att förändra projektet på ett strukturerat sätt."
        },
        {
          id: 2,
          titel: "Rollerna",
          img: "https://projektledning.se/wp-content/uploads/2018/05/Roller-inom-Scrum-1.png",
          desc: "Project owner: En project owner representerar kund om inte det är en faktiskt kund.En project owner är  bla. ansvarig för att maximera värdet på produkten som kommer från Scrum-teamets arbete. Scrum master: Scrum Master är ansvarig för Scrum-teamets effektivitet. Scrum Mastern gör detta genom att göra det möjligt för Scrum-teamet att förbättra sina metoder, inom Scrum-ramverket. Team: Ett scrum-team är en grupp samarbetspartners, vanligtvis mellan 3 och 6 individer, som arbetar för att slutföra projekt och leverera produkter."
        },
     
        {
          id:3,
          titel: "Backlog",
          img: "https://projektledning.se/wp-content/uploads/2018/05/Product-Backlog.png",
          desc: "En Scrum Product Backlog helt enkelt en lista över alla saker som behöver göras inom projektet. Där alla tickets och userstorys är samlade som man sedan tar från till sin sprint. "
        },
        {
          id: 4,
          titel: "Sprint",
          img: "https://projektledning.se/wp-content/uploads/2018/05/SPRINT.png",
          desc: "En sprint där du samlar saker du ska göra för dagen eller kanske veckan som du tagit från din produkt backlog. När man sedan är klar med en sprint kan man påbörja nästa sprint."
        },
        {
          id: 5,
          titel: "Sprintplanning",
          img:"https://projektledning.se/wp-content/uploads/2018/05/BACKLOG.png",
          desc: "Sprintplanning är när du väljer ut och planerar dina tickets som man tagit ut från sin backlog. "
        },
        {
          id:6,
          titel: "Sprint artefacts",
          img: "https://www.ntaskmanager.com/wp-content/uploads/2020/07/Scrum-Artifacts.png",
          desc: "Sprint Artifacts tillhandahåller nyckelinformation som Scrum-teamet och intressenterna behöver vara medvetna om för att förstå produkten under utveckling."
        },
        {
          id: 7,
          titel: "Sprint review",
          img: "https://projektledning.se/wp-content/uploads/2018/05/REVIEW.png",
          desc: "Syftet med Sprint Review är att inspektera resultatet av Sprinten och fastställa framtida anpassningar. Scrum-teamet presenterar resultatet av sitt arbete för nyckelintressenter och framsteg mot produktmålet diskuteras."
        },
        {
          id: 8,
          titel: "Sprint retrospective",
          img: "https://projektledning.se/wp-content/uploads/2018/05/RETROSPECTIVE.png",
          desc: "Sprint retrospective är ett kort möte som hålls efter Sprint review i slutet av varje sprint. Under Sprint retrospective identifierar teamet själv delar av processen som fungerade eller inte fungerade under sprinten, tillsammans med potentiella lösningar. Det syftar till att ständigt förbättra processerna."
        },
        {
          id:9,
          titel: "Agil estimering",
          img: "https://agilakuten.se/wp-content/uploads/2019/05/estimatation-distributed.png",
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