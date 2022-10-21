import "./secondPage.css";

export default function SecondPageFirst() {
  const secondPageMap = [
    {
      views: "300+",
      subHeader: "Coded Elements",
      contents:
        "From buttons, to inputs, navbars, alerts or cards, you are covered",
    },
    {
      views: "100+",
      subHeader: "Design Blocks",
      contents:
        "Mix the sections, change the colors and unleash your creativity",
    },
    {
      views: "41",
      subHeader: "Pages",
      contents:
        "Save 3-4 weeks of work when you use our pre-made pages for your website",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row w-75 first-grid-container">
          {secondPageMap.map((content) => (
            <div className="col text-center p-3">
              <h1 className="first-h1 text-primary">{content.views}</h1>
              <h4 className="first-h4 text-secondary">{content.subHeader}</h4>
              <p className="text-secondary first-p1">{content.contents}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
