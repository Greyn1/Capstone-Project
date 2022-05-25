import CategoryItem from "./CategoryItem";
import '../Styles/Directory.styles.scss';

function Directory({ categories }) {

    const displayCategories = categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
    ));

    return (
        <div className="categories-container">
            {displayCategories}
        </div>
    );
}

export default Directory;