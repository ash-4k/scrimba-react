export default function Die(props) {
  return (
    <button
      className={props.isHeld ? 'active' : undefined}
    //   onClick={props.toggleHold}
    >
      {props.value}
    </button>
  );
}
