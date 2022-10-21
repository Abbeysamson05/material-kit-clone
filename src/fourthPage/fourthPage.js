import "./fourthPage.css";

export default function FourthPage() {
  const Lists = [
    {
      img: "page-15.jpg",
      header: "Page Header",
      text: "10 Examples",
    },
    {
      img: "page-16.jpg",
      header: "Features",
      text: "14 Examples",
    },
    {
      img: "page-17.jpg",
      header: "Pricing",
      text: "8 Examples",
    },
  ];
  return (
    <div className="container">
      <div className="fourth-grid-1">
        <div>
          <h1 className="text-highlight third-h1">Navigations</h1>
          <p className="text-highlight third-p">
            30+ components that will help go through the pages
          </p>
        </div>
        <div className="fourth-grid__2">
          {Lists.map((List) => (
            <div className="third-ind-margin">
              <a href={List.href}></a>
              <img
                src={`./alukoohPhotos/${List.img}`}
                alt="snap"
                className="pics"
              />
              <h4 className="text-highlight third-h4">{List.header}</h4>
              <p className="text-highlight third-p">{List.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
