import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 className="text-5xl text-center  ">Oppppppppps!!!!!!!!!!!!!</h1>

      <p> {error.statusText || error.message} </p>
      {error.status === 404 && (
        <div className="text-center">
          <h3>
            page not found
            <p>Go back whesfsdfsd</p>
            <Link>
              {" "}
              <button className="btn" to="/">
                {" "}
                home
              </button>{" "}
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Error;
