import Navigation from "./components/navigation";

export default function Layout(props) {
  return (
    <div>
      {props.children}
      <Navigation />
    </div>
  );
}
