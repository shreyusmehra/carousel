import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Item = ({ item }) => {
  const { name, description, color } = item;

  return (
    <Paper style={{ backgroundColor: color, padding: "10px" }}>
      <h2>{name}</h2>
      <p>{description}</p>

      <Button className="CheckButton" style={{ color: "black" }}>
        Check it out!
      </Button>
    </Paper>
  );
};
export default Item;
