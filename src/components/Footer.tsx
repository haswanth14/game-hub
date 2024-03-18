import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://haswanth.vercel.app/" style={{ fontSize: '2xl' }}>
          Haswanth
        </a>
      </div>
    </MDBFooter>
  );
}
