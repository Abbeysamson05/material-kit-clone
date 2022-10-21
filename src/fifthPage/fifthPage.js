import "./fifthPage.css";

export default function FifthPage() {
  const Lists = [
    {
      img: "page-18.jpg",
      header: "News Letters",
      text: "15 Examples",
    },
    {
      img: "page-19.jpg",
      header: "Contact Sections",
      text: "8 Examples",
    },
    {
      img: "page-20.jpg",
      header: "Forms",
      text: "14 Examples",
    },
    {
      img: "page-21.jpg",
      header: "Inputs",
      text: "23 Examples",
    },
  ];
  return (
    <div className="container">
      <div className="fifth-grid-1">
        <div>
          <h1 className="text-highlight third-h1">Input Areas</h1>
          <p className="text-highlight third-p">
            50+ elements that you need for text manipulation and insertion
          </p>
        </div>
        <div className="fifth-grid__2">
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
