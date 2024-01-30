import { nav } from "./Nav.js"
import { meals } from "./meals.js"
import { ui } from "./ui.js"

export class ingridiants{
    constructor(){
        $('#ingridiantLink').click(()=>{
            $('#mealPage').addClass('d-none')
            $('#detailesPage').addClass('d-none')
            $('#CategoriesPage').addClass('d-none')
            $('#areaPage').addClass('d-none')
            $('#searchPage').addClass('d-none')
            $('#ingridiantsPage').removeClass('d-none')
            $('.item5').removeClass('d-none')
            this.nav.closeNav()
            this.getIngridiants()
        })
        this.ui=new ui()
        this.meals=new meals()
        this.nav=new nav()
    }
    async getIngridiants(){
        const ingApi=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        const respones=await ingApi.json()
        $('.item5').addClass('d-none')
        this.ui.diplayingridiants(respones.meals.slice(0,20))
        this.getIngridiantsId()
    }
    getIngridiantsId(){
        document.querySelectorAll('.cards').forEach(card => {
            card.addEventListener('click',()=>{
                const id=card.dataset.id
                $('.item5').removeClass('d-none')
                this.getMealsByIngridiants(id)
            })})
    }
    async getMealsByIngridiants(ingrd){
        const ingMeal=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrd}`)
        const respones=await ingMeal.json()
        this.ui.displayMeals(respones.meals)
        $('#ingridiantsPage').addClass('d-none')
        this.meals.getMealId()
    }

}