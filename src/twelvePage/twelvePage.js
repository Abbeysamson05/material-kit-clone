export default function EightPage() {
  const Lists = [
    {
      img: "page-36.jpg",
    },
    {
      img: "page-37.jpg",
    },
    {
      img: "page-38.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="eight-grid-1">
        <div>
          <h1 className="text-highlight third-h1">
            Account Pages for beautiful webapps
          </h1>
          <p className="text-highlight third-p account-mid">
            We created many examples for pages like Signup, Signin, Forgot
            Password, 2FA Authentification and so on. Just choose between a
            Basic Design, an illustration or a cover and you are good to go!
          </p>
          <div className="d-flex flex-link">
            <a
              href="/#"
              alt="view-link"
              className="btn btn-primary text-dark link"
            >
              VIEW PAGES
            </a>
            <a href="/#" alt="sign-up-link" className="sign-up text-dark link">
              VIEW SIGNUP PAGES
            </a>
          </div>
        </div>
        <div className="eight-grid__2">
          {Lists.map((List) => (
            <div>
              <img
                src={`./alukoohPhotos/${List.img}`}
                alt="snap"
                className="pics-odd"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
