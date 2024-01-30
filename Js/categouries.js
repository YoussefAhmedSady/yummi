
import { nav } from "./Nav.js";
import { details } from "./details.js";
import { meals } from "./meals.js";
import { ui } from "./ui.js";

export class Category{
    constructor(){
        $('#categoriesLink').click( (e)=> { 
            $('#mealPage').addClass('d-none')
            $('#detailesPage').addClass('d-none')
            $('#searchPage').addClass('d-none')
            $('#areaPage').addClass('d-none')
            $('#CategoriesPage').removeClass('d-none')
            $('#ingridiantsPage').addClass('d-none')
            $('.item5').removeClass('d-none')
            this.nav.closeNav()
            this.getCategories()
        });
        this.ui=new ui()
        this.meals=new meals()
        this.details=new details()
        this.nav=new nav()
    }
async getCategories(){
    const categouryApi=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const response=await categouryApi.json()
    $('.item5').removeClass('d-none')
    this.ui.displayCategouries(response.categories)
    this.getCategouryId()
    }

    getCategouryId(){
        $('.item5').addClass('d-none')
        document.querySelectorAll('.cards').forEach(card => {
        card.addEventListener('click',()=>{
            const id=card.dataset.id
            console.log(id);
            this.getMealByCategoury(id)
            $('.item5').removeClass('d-none')
        })
        });
    }
    async getMealByCategoury(id){
        const categouryApi=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    const response=await categouryApi.json()
    $('.item5').removeClass('d-none')
    console.log(response);
    this.ui.displayMeals(response.meals.slice(0,20))
    $('#mealPage').removeClass('d-none')
    $('#CategoriesPage').addClass('d-none')
    this.meals.getMealId()
    }
}