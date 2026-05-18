export default function Chips(props) {
  return props.languages.map((language) => {
    return (
      <button
        key={language.name}
        className="chip"
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
        }}
      >
        {language.name}
      </button>
    );
  });
}