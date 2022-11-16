import Header from "./Header"

function Footer() {
  return (
    <footer className="footer">
      @2022 nestorovic development. All rights reserved.
    </footer>
  )
}

function MainContent() {
  return (
    <div className="main">
      <h1>My reasons why I using React ! </h1>
      <ol>
        <li>Becuase it would help me to easier build web app</li>
        <li>I will become better front end programer</li>
        <li>I will increase my knowleadge.</li>
      </ol>
    </div>
  )
}


function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


ReactDOM.render(<Page />, document.getElementById("root"))