import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({ removeCard, addLikes, removeLikes, ...rest }) => {
  // The rest is here name and you can name it anything
  const { category } = useParams();

  const categoryItems = rest[category]; // If you have object, the you can read the properits like that rest=[category]

  return (
    <>
      <h2>{category}</h2>
      {categoryItems.map((item) => {
        return (
          <Card
            key={item.name}
            name={item.name}
            likes={item.likes}
            removeCard={() => removeCard(item.name, category)}
            removeLikes={() => removeLikes(item.name, category, "remove")} // remove is action here.
            addLikes={() => addLikes(item.name, category, "add")}
          />
        );
      })}
    </>
  );
};
export default CategoryPage;
