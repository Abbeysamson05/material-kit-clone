import "./sixthPage.css";

export default function SixthPage() {
  const Lists = [
    {
      img: "page-22.jpg",
      header: "Alerts",
      text: "7 Examples",
    },
    {
      img: "page-23.jpg",
      header: "Notifications",
      text: "2 Examples",
    },
    {
      img: "page-24.jpg",
      header: "Toolkits & Popovers",
      text: "8 Examples",
    },
    {
      img: "page-25.jpg",
      header: "Inputs",
      text: "3 Examples",
    },
  ];
  return (
    <div className="container">
      <div className="sixth-grid-1">
        <div>
          <h1 className="text-highlight third-h1">Attention Catchers</h1>
          <p className="text-highlight third-p">
            20+ Fully coded components that popup from different places of the
            screen
          </p>
        </div>
        <div className="sixth-grid__2">
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
