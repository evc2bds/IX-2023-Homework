export class Recipe {
    constructor(id, recipeName, description, ingredients, directions, picture) {
        this.id = id;
        this.recipeName = recipeName;
        this.description = description;
        this.ingredients = ingredients;
        this.directions = directions;
        this.picture = picture;
    }
}