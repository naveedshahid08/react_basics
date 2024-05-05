import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // Rename 'error' variable to avoid naming conflict
  return (
    <div>
      <h1>Oops, I did it again</h1> {/* Corrected typo in heading */}
      <p>{error.statusText || error.message}</p>{" "}
      {/* Use optional chaining for error properties */}
    </div>
  );
};

export default ErrorPage;
