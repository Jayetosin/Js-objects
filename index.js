 // Question 1
const Instagram = new Object()
Instagram.Handle = "bimboademoye";
Instagram.Content = "video Content";
Instagram.Imagelink ="https://www.instagram.com/reel/CpAmFWAgkTN/?utm_source=ig_web_copy_link";
Instagram.numberOfViews = 12275;
Instagram.numberOfLikes = 133526;
 Instagram.numberOfViews = function () {
  return this.Handle +" " +this.Content + " " + this.ImageLink + " " + this.numberOfLikes + " " +this.numberOfViews;
};
console.log(Instagram);

//Question 2
const Bimbo = Object.create(Instagram);
Bimbo.Handle ='bimboademoye';
Bimbo.numberOfLikes= 5000;

console.log(Bimbo);
//
const Content = Object.create(Instagram);
Bimbo.Content = "video Content";
Bimbo.numberOfViews= 50;

console.log (Content);

 
//Question 3
const student = {
    firstName: "Musa",
    lastName: "Dawodu",
    age: 19,
    location: "Lagos" ,
    JambScores: {
      ENG: 70,
      Govt: 85,
      LIT: 82,
      CRK: 94,
    },
  };
  
  console.log(student);
  
  //Question 3a
  function CreatePerson(firstName , lastName , age , location ) {
    return{
      firstName: firstName,
      lastName: lastName,
      age: age,
      location: location ,

    }
  }

  //Question 3a

  const Musa =CreatePerson("Musa" ," Dawodu", 19 ,"Lagos",);
  console.log(Musa),
   
//Question 3b
  function JambScores( ENG ,Govt , LIT ,CRK) {
    return{
      ENG:ENG,
      Govt:Govt ,
      LIT: LIT,
      CRK:CRK ,
    }
    return ENG +'' + Govt + '' + LIT + ''+CRK +''
  } 
     const MusaScore = new Object( [70 ,85 ,92 ,94] );
     console.log( MusaScore)
  // Question 4

  // using Object assign
  const firstMovie = {
    actor: "Song Joong ki",
    title: "Descendant of the sun",
    yearPublished: 2015,
  };
  console.log(firstMovie);

  // Using Spread Syntax( ... )
  const SecondMovie = { ...firstMovie };
  SecondMovie.title = "Vicenzo";
  console.log({ firstMovie  });
  console.log({ SecondMovie });

  //Using JSON.parse
  const ThirdMovie = JSON.parse;
ThirdMovie.title = "Reborn Rich";
console.log({ firstMovie });
console.log({ ThirdMovie });

//Question 5

const PresidentialCandidates ={
  AAC :' Omoyele Sowore',
  ACCORD: 'Christopher Imumolen' ,
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNDP:'Rabiu Kwankwanso', 
  PDP: 'Atiku Abubakar',
}
for(const key in PresidentialCandidates)
{
  console.log ( '{AAC}: {Omoyele Sowore is the presidential candidates for AAC }')
};

for (const key in PresidentialCandidates);
 {
  console.log ( '{ACCORD}: {Christopher Imumolen is the presidential candidates for ACCORD }')
};

for (const key in PresidentialCandidates);
 {
  console.log ( '{APC}: {Bola Ahmed Tinubu is the presidential candidates for APC }')
};

for (const key in PresidentialCandidates);
 {
  console.log ( '{LP}: {Peter Obi is the presidential candidates for LP }')
};

for (const key in PresidentialCandidates);
 {
  console.log ( '{NNDP}: Rabiu Kwankwanso is the presidential candidates for NNDP}')
};

for (const key in PresidentialCandidates);
 {
  console.log ( '{PDP}: {Atiku Abubakar is the presidential candidates for PDP }')
};

for (const key in PresidentialCandidates);
 {
  console.log ( '{PDP}: {Atiku Abubakar is the presidential candidates for PDP }')
 };