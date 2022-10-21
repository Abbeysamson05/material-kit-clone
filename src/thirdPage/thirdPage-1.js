import "./thirdPage.css";

export default function ThirdPage() {
  const Lists = [
    {
      img: "page-1.jpg",
      header: "Page Header",
      text: "10 Examples",
    },
    {
      img: "page-2.jpg",
      header: "Features",
      text: "14 Examples",
    },
    {
      img: "page-3.jpg",
      header: "Pricing",
      text: "8 Examples",
    },
    {
      img: "page-4.jpg",
      header: "FAQ",
      text: "1 Examples",
    },
    {
      img: "page-5.jpg",
      header: "Blog Posts",
      text: "11 Examples",
    },
    {
      img: "page-6.jpg",
      header: "Testimonials",
      text: "11 Examples",
    },
    {
      img: "page-7.jpg",
      header: "Teams",
      text: "10 Examples",
    },
    {
      img: "page-8.jpg",
      header: "Stats",
      text: "8 Examples",
    },
    {
      img: "page-9.jpg",
      header: "Call to Actions",
      text: "6 Examples",
    },
    {
      img: "page-10.jpg",
      header: "Applications",
      text: "13 Examples",
    },
    {
      img: "page-11.jpg",
      header: "Logo Area",
      text: "7 Examples",
    },
    {
      img: "page-12.jpg",
      header: "Footers",
      text: "2 Examples",
    },
    {
      img: "page-13.jpg",
      header: "General Cards",
      text: "17 Examples",
    },
    {
      img: "page-14.jpg",
      header: "Content Sections",
      text: "23 Examples",
    },
  ];
  return (
    <div className="container">
      <div className="third-page-heading">
        <button className="btn btn-primary text-bold">
          INFINITE COMBINATIONS
        </button>
        <h1 className="text-highlight third-h1">Huge collection of sections</h1>
        <p className="text-highlight third-p">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </p>
      </div>
      <div>
        <a href="/#" alt="pics link">
          <img src="./alukoohPhotos/page-1.jpg" alt="snap" className="pics" />
        </a>
        <h4 className="text-highlight third-h4">Page Header</h4>
        <p className="text-highlight third-p">10 Examples</p>
      </div>
      <div className="third-grid-1">
        <div>
          <h1 className="text-highlight third-h1">Design Blocks</h1>
          <p className="text-highlight third-p">
            A selection of 45 page sections that fit perfectly in any
            combination
          </p>
        </div>
        <div className="third-grid__2">
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
