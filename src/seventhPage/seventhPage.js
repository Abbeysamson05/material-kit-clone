import "./seventhPage.css";

export default function SeventhPage() {
  const Lists = [
    {
      img: "page-26.jpg",
      header: "Buttons",
      text: "7 Examples",
    },
    {
      img: "page-27.jpg",
      header: "Avatars",
      text: "1 Examples",
    },
    {
      img: "page-28.jpg",
      header: "Dropdowns",
      text: "8 Examples",
    },
    {
      img: "page-29.jpg",
      header: "Toggle",
      text: "5 Examples",
    },
    {
      img: "page-30.jpg",
      header: "Social Buttons",
      text: "3 Examples",
    },
    {
      img: "page-31.jpg",
      header: "Breadcrumbs",
      text: "15 Examples",
    },
    {
      img: "page-32.jpg",
      header: "Badges",
      text: "1 Examples",
    },
    {
      img: "page-33.jpg",
      header: "Progress Bars",
      text: "4 Examples",
    },
    {
      img: "page-34.jpg",
      header: "Tables",
      text: "30 Examples",
    },
    {
      img: "page-35.jpg",
      header: "Typography",
      text: "2 Examples",
    },
  ];
  return (
    <div className="container">
      <div className="seventh-grid-1">
        <div>
          <h1 className="text-highlight third-h1">Elements</h1>
          <p className="text-highlight third-p">
            80+ carefully crafted small elements that come with multiple colors
            and shapes
          </p>
        </div>
        <div className="seventh-grid__2">
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
